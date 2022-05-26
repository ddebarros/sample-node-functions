/**
  *
  * main() will be run when you invoke this action
  *
  * @param DigitalOcean Functions accepts a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
async function main(args) {
  return {
    headers: {
      'Content-Type': 'text/html'
    },
    statusCode: 200,
    body: `
      <html>
          <body>
              <h3>Args</h3>
              <pre>${JSON.stringify(args, null, 2)}</pre>
          </body>
      </html>`
  }
}

exports.main = main;