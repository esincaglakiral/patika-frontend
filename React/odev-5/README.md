> basic button creating library

## Install

```bash
npm install --save cely-basic-buttons
```

## Usage

button types = primary, success, warning, danger

```jsx
import React, { Component } from 'react'
import 'cely-basic-buttons/dist/index.css'

import Button from 'cely-basic-buttons'

class Example extends Component {
  render() {
    return <Button text="Send" type="primary" />
  }
}
```

## License

MIT © [celalyuksel](https://github.com/celalyuksel)
