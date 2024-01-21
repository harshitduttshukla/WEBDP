#include<bits/stdc++.h>
#include<vector>
using namespace std;
int lastCccurence(vector<int>&arr, int n, int k){
    int low = 0;
    int high = n-1;
    int ans = -1;
    while(low<=high){
        int mid = (low+high)/2;
        if (arr[mid] == k) {
          ans = mid;
          low = mid + 1;
        }
        else if (arr[mid] > k){
            high = mid -1;

        }
        else{
            low  = mid + 1;
        }
    }
    return ans;


}

int main()
{
    vector<int> arr = {3, 5, 9, 9, 9, 19};
    int n = 6, x = 9;
    int ind = lastCccurence(arr, n, x);
    cout << "first occurrence: " << ind << "\n";
    return 0;
}