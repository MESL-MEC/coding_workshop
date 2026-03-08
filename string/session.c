#include <stdio.h>
#include <string.h>


int main() {
    char name[10];
    printf("input: ");
    fgets(name,10,stdin);
    
    printf("%s", name);
    return 0;
}