#include <iostream>
#include <vector>

void divideArray(std::vector<int>& arr, int size) {
    int firstThird = size / 3;
    int secondThird = 2 * size / 3;

    // Indices to mark the boundaries of the three sections
    int firstEnd = firstThird - 1;
    int secondStart = firstThird;
    int secondEnd = secondThird - 1;
    int thirdStart = secondThird;

    // Printing the three parts
    std::cout << "First Part: ";
    for (int i = 0; i <= firstEnd; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    std::cout << "Second Part: ";
    for (int i = secondStart; i <= secondEnd; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;

    std::cout << "Third Part: ";
    for (int i = thirdStart; i < size; ++i) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};

    int size = arr.size();

    divideArray(arr, size);

    return 0;
}
