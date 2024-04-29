const fs = require("fs"),
  fastCsv = require("fast-csv");

class CSVWriter {
  constructor(filePathOrStream, { headers = true, append = true } = {}) {
    try {
      if (typeof filePathOrStream === "string") {
        this.stream = fs.createWriteStream(filePathOrStream, {
          flags: append ? "a" : undefined,
        });
      } else {
        this.stream = filePathOrStream;
      }
      this.csvOutStream = fastCsv.createWriteStream({ headers: headers });
      this.csvOutStream.pipe(this.stream);
    } catch (e) {
      throw e;
    }
  }
  write(data) {
    return new Promise((resolve, reject) => {
      this.csvOutStream.write(data, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  end() {
    return new Promise((resolve, reject) => {
      this.csvOutStream.end((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
module.exports = CSVWriter;
