# Toast-lib

## Installation

**npm**

```
npm install toast-lib
```

**yarn**

```
yarn add toast-lib
```

## Demo

[Open demo](http://Fritterus.github.io/Toast-lib)

## Usage

```jsx
import React from 'react';

import { ToastContainer, addToast } from 'toast-lib';

const App = () => {
  const showToast = () => {
    addToast({
      type: 'Warning',
      description: 'Toast example',
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show toast</button>
      <ToastContainer />
    </div>
  );
};
```
