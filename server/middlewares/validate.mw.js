const yup = require('yup');

const validateSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  displayName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  role: yup.string().required(),
  isSubscribe: yup.boolean().required(),
});

module.exports.validate = async (req, res, next) => {
  const { body } = req;

  try {
    req.body = await validateSchema.validate(body);
    next();
  } catch (error) {
    res.status(406).send(error.message);
  }
};
