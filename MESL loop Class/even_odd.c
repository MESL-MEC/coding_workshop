#include <stdio.h>

int main() {
    int n;
    int even_sum = 0, odd_sum = 0;

    printf("Enter a number: ");
    scanf("%d", &n);

    for(int i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            printf("%d is Even\n", i);
            even_sum = even_sum + i;
        } else {
            printf("%d is Odd\n", i);
            odd_sum = odd_sum + i;
        }
    }

    printf("\nSum of Even numbers = %d", even_sum);
    printf("\nSum of Odd numbers = %d", odd_sum);

    return 0;
}
