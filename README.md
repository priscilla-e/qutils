# Qutils

A collection of private util functions for my personal development.


## Installation
Install the package into your project directory:
```bash
  npm i @cilladev/qutils
```

## Utility Functions

</details>
<details>
<summary>

### 1. delay

</summary>

The `delay` function is used to introduce a delay in the execution of a program. It is commonly used in scenarios where you want to pause the execution of a program for a specific amount of time.

### Parameters

- `milliseconds` (integer): The number of milliseconds to delay the program execution.

### Return Value
A promise that resolves after the specified delay.


### Example Usage
```typescript

import { delay } from "@cilladev/qutil"

async function sendRequest() {
  await delay(1000) // delay for 1 second

  //...
}
```

</details>