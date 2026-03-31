---
theme: apple-basic
title: Arrays as Function Arguments
class: intro
drawings:
  persist: false
transition: slide-left
fonts:
  sans: FiraCode Nerd Font
  serif: FiraCode Nerd Font
---

# Arrays
as Function Arguments

<div class="absolute bottom-10">
  <span class="font-700">
    Aurka | MESL C Programming Workshop
  </span>
</div>

---
title: prerequisites-pointers
zoom: 1.25
---

# pointers

````md magic-move
```c
#include <stdio.h>
int main() {
    int x = 10;
}
```
```c
#include <stdio.h>
int main() {
    int x = 10;
    int *ptr;
}
```
```c
#include <stdio.h>
int main() {
    int x = 10;
    int *ptr;
    ptr = &x;
}
```
```c
#include <stdio.h>
int main() {
    int x = 10;
    int *ptr;
    ptr = &x;

    printf("address and value: %p %d\n", ptr, *ptr); // 300 10
}
```
```c
#include <stdio.h>
int main() {
    int x = 10;
    int *ptr;
    ptr = &x; // 300

    printf("address and value: %p %d\n", ptr, *ptr); // 300 10
    printf("address and value: %p %d\n", (ptr + 1), *(ptr + 1)); // 304 2
}
```
````

<!-- 
basic pointer syntax
how to define
assign
`*` operator to dereference
pointer arithmetic
-->

---
zoom: 1.25
---

# arrays
````md magic-move
```c
#include <stdio.h>
int main() {
  int a = 1;
  int b = 2;
  int c = 3;
  int d = 4;
  int e = 5;
}
```
```c
#include <stdio.h>
int main() {
  int arr = 1,2,3,4,5;
}
```
```c
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
}
```
```c
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printf("First element: %d\n", arr[0]); // 1
  printf("Second element: %d\n", arr[1]); // 2
  printf("Third element: %d\n", arr[2]); // 3
}
```
```c
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printf("First element's address: %p\n", &arr[0]); // 304
  printf("Second element's address: %p\n", &arr[1]); // 308
  printf("Third element's address: %p\n", &arr[2]); // 312
}
```
```c
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  int *ptr = &arr[0];
  printf("addr and value: %p %d\n", ptr, *ptr); // 304 1
  printf("addr and value: %p %d\n", (ptr + 1), *(ptr + 1)); // 308 2
  printf("addr and value: %p %d\n", (ptr + 2), *(ptr + 2)); // 312 3
}
```
````

<!-- 
basic array syntax
how to define
access elements
arrays are stored in contiguous memory locations
-->

---
zoom: 1.25
---

```c {monaco-run}
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  int *ptr = &arr[0];
  printf("addr and value: %p %d\n", ptr, *ptr);
  printf("addr and value: %p %d\n", arr, *arr);
}
```

<v-click>

For Arrays:
- address: `&arr[i]` <=> `arr + i`
- values : `arr[i]` <=> `*(arr + i)`
- <span v-mark="{ at: 2, color: '#ff0000', type: 'underline', multiline: true }"> array variable itself is a pointer to the first element of the array <br> `arr` <=> `&arr[0]` </span>

</v-click>

<!-- 
1. dekhabo je equivalent ptr+1, *(ptr+1) and arr+1, *(arr+1) so arr is pointer
2. then arr[0] syntax: &arr[2], arr[2]);
3. so we can say
    - address: arr + i <=> &arr[i]
    - value: *(arr + i) <=> arr[i]
-->

---
title: arrays-as-function-arguments
zoom: 1.25
---

# arrays as function arguments

````md magic-move
```c
#include <stdio.h>
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
```
```c
#include <stdio.h>
void printArray(int arr[5]) {
  for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c
#include <stdio.h>
void printArray(int arr[]) {
  for (int i = 0; i < 5; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c
#include <stdio.h>
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printArray(arr, 5);
}
```
````

<!-- 
1. make a simple function.
2. well function hoite hobe universal. so signature cant be arr[5] it should be arr[].
3. for now we take size as arguemnent.
-->

--- 
title: problems with arrays as function arguments
layout: two-cols
---
isssues

````md magic-move
```c
#include <stdio.h>
int main() {
  int x = 5;
}
```
```c
#include <stdio.h>
int main() {
  int x = 5;
  int size = sizeof(x);
  printf("memory size of x: %d\n", size); // 4
}
```
```c
#include <stdio.h>
int main() {
  int x[] = {5,5,5,5,5};
  int size = sizeof(x);
  printf("memory size of x: %d\n", size); // 20
}
```
```c
#include <stdio.h>
int main() {
  int x[] = {5,5,5,5,5};
  int size = sizeof(x) / sizeof(x[0]);
  printf("memory size of x: %d\n", size); // 20
}
```
```c
#include <stdio.h>
int main() {
  int x[] = {5,5,5,5,5};
  int size = sizeof(x) / sizeof(x[0]);
  printf("number of elements in x: %d\n", size); // 5
}
```
```c
#include <stdio.h>
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  printArray(arr, 5);
}
```
```c {*|10|10-11|*|10-11,2|*}
#include <stdio.h>
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr, size);
}
```
```c
#include <stdio.h>
void printArray(int arr[]) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c
#include <stdio.h>
void printArray(int arr[]) {
  int size = sizeof(arr) / sizeof(arr[0]);
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c {*|4-6,14-16|*}
#include <stdio.h>
void printArray(int arr[]) {
  int size = sizeof(arr) / sizeof(arr[0]);
  printf("func: arr size: %d, 0th size: %d\n", 
      sizeof(arr), sizeof(arr[0])
  ); // 8
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("main: arr size: %d, 0th size: %d\n", 
      sizeof(arr), sizeof(arr[0])
  ); // 8
  printArray(arr);
}
```
```c {*|14|*}
#include <stdio.h>
void printArray(int arr[]) {
  int size = sizeof(arr) / sizeof(arr[0]);
  printf("func: arr size: %d, 0th size: %d\n", 
      sizeof(arr), sizeof(arr[0])
  ); // 8
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("size of 0th address: %d\n", sizeof(&arr[0])); // 8
  printf("main: arr size: %d, 0th size: %d\n", 
      sizeof(arr), sizeof(arr[0])
  ); // 8
  printArray(arr);
}
```
```c {*|2}
#include <stdio.h>
void printArray(int arr[]) {
  int size = sizeof(arr) / sizeof(arr[0]);
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c {2|*}
#include <stdio.h>
void printArray(int *arr) {
  int size = sizeof(arr) / sizeof(arr[0]);
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printArray(arr);
}
```
```c
#include <stdio.h>
void printArray(int *arr) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr);
}
```
```c
#include <stdio.h>
void printArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr, size);
}
```
````

::right::

code editor

```c {monaco-run}{autorun:false,height:'auto'}
#include <stdio.h>
int main() {
  printf("meow\n");
}
```
<!--
1. how to calculate size of var -> array
2. now lets do it in function
2.1 do calc in main. works
2.2 do calc in function. does not work?
3. debug size of function values.
4. match it with address of 0th element.
5. now check with any integer pointer
-->

---
zoom: 1.25
---

# easter egg

````md magic-move
```c {*|4}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", arr[2]);
}
```
```c {4}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", arr[2]); // x[i] <=> *(x + i)
}
```
```c {4}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", *(arr + 2)); // x[i] <=> *(x + i)
}
```
```c {4}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", *(2 + arr)); // x[i] <=> *(x + i)
}
```
```c {4|*}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", 2[arr]); // x[i] <=> *(x + i)
}
```
```c {*|4}
#include <stdio.h>
void printArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr, size);
}
```
```c {4|*}
#include <stdio.h>
void printArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", *(arr + i));
  }
  printf("\n");
}
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr, size);
}
```
````

<div v-click="[6, 7]">

## test

```c {monaco-run}{autorun:false,height:'auto'}
#include <stdio.h>
int main() {
  int arr[] = {1, 2, 3, 4, 5};
  printf("%d\n", 2[arr]);
}
```

</div v-click>

---
zoom: 1.25
---

# practice

task 1: square all elements of an array using a function.

<v-click>
task 2: preserve original array
</v-click>

```c {monaco-run}{autorun:false,height:'auto'}
#include <stdio.h>

void printArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}

int main() {
  int arr[] = {1, 2, 3, 4, 5};
  int size = sizeof(arr) / sizeof(arr[0]);
  printArray(arr, size);
}
```

<!-- 
1. 
void squareArray(int *arr, int size) {
  for (int i = 0; i < size; i++) {
    arr[i] = arr[i] * arr[i];
  }
}
2. hint scanf
void squareArray(int *arr, int size, int *NEWarr) {
  for (int i = 0; i < size; i++) {
    NEWarr[i] = arr[i] * arr[i];
  }
}
-->
