---
theme: apple-basic
title: Pointers
class: intro
drawings:
  persist: false
transition: slide-left
fonts:
  sans: FiraCode Nerd Font
  serif: FiraCode Nerd Font
---

# Pointers

C Programming Workshop

<div class="absolute bottom-10">
  <span class="font-700">
    Aurka | MESL
  </span>
</div>

---
title: visual
---

<table>
  <tbody>
    <tr>
      <th>address</th>
      <th>value</th>
    </tr>
    <tr>
      <td>0x 1000</td>
      <td>0b 0100'0001 => 'A' </td>
    </tr>
    <tr>
      <td>0x 1001</td>
      <td>0b 0100'0002 => 'B'</td>
    </tr>
    <tr>
      <td>0x 1002</td>
    </tr>
    <tr>
      <td>0x 1003</td>
    </tr>
    <tr>
      <td>0x 1004</td>
      <td>
        <v-switch>
          <template #1>0x1000</template>
        </v-switch>
      </td>
    </tr>
  </tbody>
</table>

<!-- 
1. memory kivabe thake
2. named location = variable
3. char holding places
4. digit seperator is single quote
5. we use the value. but what if we use the address
6. click
7. point aka aki je look this is the address pointing to 
-->

---
title: working basic
---

# accessing address

```c {monaco-run}
#include <stdio.h>
int main() {
    char a = 'A';
    char b = 'B';
    printf("%x\n", &a);
    printf("%x\n", &b);
}
```
<!-- 
1. getting memory address
2. we used it before? scanf
3. store it to another hex var => pointer
-->

---
title: pointer syntax
---

# pointers

```c {monaco-run}
#include <stdio.h>
int main() {
    char a = 'A';
    int pa = &a;
}
```

<!-- 
problems:
1. we dont know what type of data is inside
2. is it normal integer or memory address

solution:
pointer declaration, ekta star maira deo, with jei type er value ache
declare ar assign alada kora jay

show getting value from pointer
show print statements and stuffs. 
-->

---
layout: section
---

# Types of pointers

---
title: types of pointers
---
add `*` in type declaration. 
=> Voila! you got your pointer type

- `int` type pointer: `int*`
- `char` type pointer: `char*`

# Why not generic type?
like 
```c
pointer p = &var
```
---

```mermaid
---
title: 1025
---

flowchart LR

subgraph byte3
direction TB
b3[0000 0000]
a3[203]
b3 -.- a3
end

subgraph byte2
direction TB
b2[0000 0000]
a2[202]
b2 -.- a2
end

subgraph byte1
direction TB
b1[0000 0100]
a1[201]
b1 -.- a1
end

subgraph byte0
direction TB
b0[0000 0001]
a0[200]
b0 -.- a0
end

byte3 -.- byte2 -.- byte1 -.- byte0
```

```c
int a = 1025;
int* p = &a;

printf(p) => 200
printf(*p) => look for 4 memory blocks
```

---

```c {monaco-run}
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;
  printf("size of int: %d\n", sizeof(int));
  printf("address: %p, value: %d\n", p, *p);
}
```

<!-- 
0. %p for pointer formatting
1. take another char pointer.
2. cast previous pointer as char so that we can take 1 byte
3. same address, but value will change, cz amra 1 block nisi

// 1025 => 00000000 00000000 00000100 000000001
-->

---

# pointer arithmetic

````md magic-move
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;
  printf("size of int: %d\n", sizeof(int));
  printf("address: %p, value: %d\n", p, *p);
  // 1025 => 00000000 00000000 00000100 000000001
  char *p0;
  p0 = (char*) p;
  printf("size of int: %d\n", sizeof(char));
  printf("address: %p, value: %d\n", p0, *p0);

}
```
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;
  printf("size of int: %d\n", sizeof(int));
  printf("address: %p, value: %d\n", p, *p);
  printf("address: %p, value: %d\n", p+1, *(p+1));
  // 1025 => 00000000 00000000 00000100 000000001
  char *p0;
  p0 = (char*) p;
  printf("size of int: %d\n", sizeof(char));
  printf("address: %p, value: %d\n", p0, *p0);
  printf("address: %p, value: %d\n", p0+1, *(p0+1));
}
```
````

---

what if we just want address!? 

# void pointers
````md magic-move
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;

  char *p0;
  p0 = (char*) p;
}
```
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;

  void *p0;
  p0 = (char*) p;
}
```
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;

  void *p0;
  p0 = p;
}
```
```c
#include<stdio.h>
int main(){
  int a = 1025;
  int *p = &a;

  void *p0;
  p0 = p;
  print("%p\n", p0);
}
```
````

<br>

<v-click>

## Issues

</v-click>

<v-clicks>

- Cannot Derefence: `*p0` not allowed
- Cannot perform pointer arithmetic: `0p+1` not allowed

</v-clicks>

<!-- baki ja janar, pore janbi usage dekhle. -->

---
title: pointer to pointer
---

---
title: pointer as function argument
---

---
title: pointers and arrays
---

---
title: array as function argument
---

---
title: character arrays and pointers
---

---
title: pointer and 2D arrays
---

---
title: pointer and multidimensional arrays
---

---
title: dynamic allocation in C
---

---
title: pointer as function return
---

---
title: function pointer and callbacks
---

---
title: memory leak in C
---
