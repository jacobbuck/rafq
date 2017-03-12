# rafq

Enqueue operations to be called in the next frame using `requestAnimationFrame`.

## Usage

```js
import rafq from 'rafq';

// Create a new requestAnimationFrame queue
const q = rafq();

// Add an operation to the queue
q.add(myfunc);

// Remove an operation from the queue
q.remove(myfunc);

// Clear the queue entirely
q.clear();
```
