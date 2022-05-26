/**
  *
  * main() will be run when you invoke this action
  *
  * @param DigitalOcean Functions accepts a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
function main(args) {
  const name = args.name || 'Stranger'

  return {
    statusCode: 200,
    body: `Hello ${name}`
  };
}

exports.main = main;