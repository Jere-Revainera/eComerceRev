import crypto from "crypto";
import fs from "fs";

class ProductsManager {
  constructor(path) {
    this.path = path;
    this.exists();
  }
  exists() {
    const exists = fs.existsSync(this.path);
    if (!exists) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("File created");
    } else {
      console.log("File already exists");
    }
  }

  async readAll(category) {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parseData = JSON.parse(data);
      if (category) {
        const filterData = parseData.filter(
          (each) => each.category === category
        );
        return filterData;
      } else {
        return parseData;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async read(id) {
    try {
      const all = await this.readAll();
      const one = all.find((each) => each.id === id);
      return one;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async create(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const all = await this.readAll();
      all.push(data);
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return data.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(id, newData) {
    try {
      const all = await this.readAll();
      const index = all.findIndex((product) => product.id === id);
      if (index === -1) {
        return null;
      }
      all[index] = { ...all[index], ...newData };
      const stringAll = JSON.stringify(all, null, 2);
      await fs.watchFile(this.path, stringAll);
      return all[index];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async destroy(id) {
    try {
      const all = await this.readAll();
      const filterdProducts = all.filter((product) => product.id !== id);
      if (all.length === filterdProducts.length) {
        return null;
      }
      const stringAll = JSON.stringify(filteredProducts, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return `Product with id ${id} deleted`;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const productsManager = new ProductsManager("./src/files/products.json");
export default productsManager;
