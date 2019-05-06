#include <bits/stdc++.h>
using namespace std;

int main() {
    while(true) {
        int n;
        scanf("%d", &n);
        while(n % 2 == 0) {
            printf("2x");
            n /= 2;
        }
        for(int i = 3; i * i <= n; i += 2) {
            while(n % i == 0) {
                printf("%dx", i);
                n /= i;
            }
        }
        if(n > 1) {
            printf("%d\n", n);
        }
    }
    return 0;
}
