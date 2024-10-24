const mvc = require("../model/schema2");
exports.create = async (req, res) => {
  const data = req.body;
  try {
    req.body.image = req.file.filename;
    const createdata = await mvc.create(data);
    res.status(200).json({
      status: "success",
      Message: "data enter succes",
      Data: createdata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not enter",
    });
  }
};

exports.show = async (req, res) => {
  const data = req.body;
  try {
    const showdata = await mvc.find(data);
    res.status(200).json({
      status: "success",
      Message: "data show succes",
      Data: showdata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not show",
    });
  }
};

exports.Delete = async (req, res) => {
  const Id = req.params.id;
  try {
    const updetedata = await mvc.findByIdAndDelete(Id, req.body);
    res.status(200).json({
      status: "success",
      Message: "data delete succes",
      Data: updetedata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not updete",
      data: [],
    });
  }
};

exports.updete = async (req, res) => {
  const Id = req.params.id;
  try {
    const updetedata = await mvc.findByIdAndUpdate(Id, req.body);
    res.status(200).json({
      status: "success",
      Message: "data updete succes",
      Data: updetedata,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message: "not updete",
      data: [],
    });
  }
};