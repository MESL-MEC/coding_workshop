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

# Example

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

show print statements and stuffs. 
-->

---
title: pointer type
---

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

nn
