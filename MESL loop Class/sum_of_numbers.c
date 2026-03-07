#include <stdio.h>
int main() {
    int n;
    scanf("%d", &n);

    int amni = 0; 
    for (int i = 1; i <= n; i++) {
        if (amni == 0)
            printf("%d is Even\n", i);
        else
            printf("%d is Odd\n", i);

        amni = 1 - amni;
    }

    return 0;
}