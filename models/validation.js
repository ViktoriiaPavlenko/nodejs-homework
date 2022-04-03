const Joi = require("joi");

const validation = (data) => {
  const schema = Joi.object({
    name: Joi.string()
      .regex(/^[A-Z]+ [A-Z]+$/i)
      .min(3)
      .max(30)
      .required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    phone: Joi.string()
      .pattern(/^[0-9 -]+$/, "numbers")
      .min(10)
      .max(16)
      .required(),
  });

  return schema.validate(data);
};

module.exports = validation;
//   .pattern( //     // eslint-disable-next-line no-useless-escape //     /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, //     "numbers" //   )
// mongodb+srv://viktoriia-hw-03:<password>@cluster0.z8ba3.mongodb.net/test
// mongodb+srv://viktoriia-hw-03:password4321@cluster0.z8ba3.mongodb.net/test
