const jimp = require('jimp');

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
  const url = args.url;
  
  if (!url) {
    return {
      statusCode: 400,
      body: {
        message: 'An image url is required.'
      }
    }
  }

  try {
    const image = await jimp.read(url);
    
    if (args.h && !args.w) {
      await image.resize(jimp.AUTO, parseInt(args.h));
    } else if (!args.h && args.w) {
      await image.resize(parseInt(args.w), jimp.AUTO);
    } else {
      await image.resize(250, 250);
    }
    
    const mime = image.getMIME()
    const imageBuffer = await image.getBufferAsync(mime);
    const imageData = imageBuffer.toString('base64');

    return {
      headers: {
        'Content-Type': mime,
      },
      statusCode: 200,
      body: imageData
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: {
        message: `Unable to resize image: ${error.message}`,
        error: error
      }
    }
  }
}

exports.main = main;