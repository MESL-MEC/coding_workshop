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
layout: two-cols
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
  printf("First element: %p\n", &arr[0]); // 304
  printf("Second element: %p\n", &arr[1]); // 308
  printf("Third element: %p\n", &arr[2]); // 312
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
- variable itself is a pointer to the first element of the array <br> `arr` <=> `&arr[0]`

</v-click>

<!-- 
1. dekhabo je equivalent ptr+1, *(ptr+1) and arr+1, *(arr+1) so arr is pointer
2. then arr[0] syntax: &arr[2], arr[2]);
3. so we can say
    - address: arr + i <=> &arr[i]
    - value: *(arr + i) <=> arr[i]
-->
