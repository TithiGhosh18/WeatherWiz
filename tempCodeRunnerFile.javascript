
#include <stdio.h>

int main(void) {
    int T;
    int X,Y;
    scanf("%d",&T);
    for(int i=0;i<4;i++){
        scanf("%d %d",&X,&Y);
    }
    for(int i=0;i<T;i++){
        if((X+Y)>6){
            printf("YES\n");
        }
        else{
            printf("NO\n");
        }
    }
	return 0;
}
