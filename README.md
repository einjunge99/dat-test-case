# How to use?

If plugin is not built yet, you can just run

```
yarn run build
```

in order to get the desired output:

- plugin.js
- plugin.css

## Embedding the app

You've got to add both the css and js files into your app. Here's an example of how to do it in a plain html page:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Project</title>
    <!-- YOUR CSS PLUGIN FILE -->
    <link rel="stylesheet" href="plugin.css" />
  </head>
  <body>
    <!-- YOUR JS PLUGIN FILE -->
    <script src="plugin.js"></script>
    <div id="root" />
  </body>
</html>
```

You now have the plugin running!

### Customize plugin

You can add an initial state and set callbacks to handle plugin events by adding the following script:

```html
...
<script>
  document.addEventListener("DOMContentLoaded", () => {
    window.DAMAGE_SELECTOR_API &&
      window.DAMAGE_SELECTOR_API.init({
        selector: "#root",
        options: {
          initializedOptions: ["A1", "C2", "B4", "A2"], // array of active positions
          onPositionChange(positions) {
            // called when positions change and returns an array of active positions
          },
          onComplete(positions) {
            // called when events are confirmed
          },
          onInit() {
            // called on plugin initialization
          },
        },
      });
  });
</script>
...
```
