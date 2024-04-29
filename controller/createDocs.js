const path = require("path");
const CSVWriter = require("../services/CSVWriter");
const generateToken = require("../services/generateToken");

const DIR_PATH = path.join(__dirname, "..", "datas");
const FILE_PATH = path.join(DIR_PATH, `createDocs.csv`);

exports.generate = (count, userId) => {
  const writer = new CSVWriter(FILE_PATH, { headers: true, append: false });
  console.log(`Generating ${count} paylods for Create Docs API`);
  const token = generateToken({ userId });
  for (let i = 1; i <= count; i++) {

    const samplePayload = {
      title: `Example Title ${i}`,
      description: `Example Description ${i}`,
      type: "business",
      comments: `Example Comments ${i}`,
      approvers: JSON.stringify([
        {
          userInfo: {
            user: userId,
            name: "pihtestuser",
            email: "test@pih.com",
          },
        },
      ]),
      notifyEmailList: ["email1@example.com", "email2@example.com"],
      supportingDocs: [
        "https://shaharunpublic.blob.core.windows.net/shaharunpublicfiles/1714299476018-1c178630-9f5e-4653-9dd7-0c230fc94ac0.pdf"
      ],
      documents: [
        "https://shaharunpublic.blob.core.windows.net/shaharunpublicfiles/1714299476018-1c178630-9f5e-4653-9dd7-0c230fc94ac0.pdf"
      ],
      isSequential: true,
      isConfirmed: false,
      reviewers: [],
    };

    writer.write({
      token,
      ...samplePayload
    });
  }
  writer.end();
  console.log(`Saved ${count} paylods to ${FILE_PATH}`);
};
