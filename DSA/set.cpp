#include <iostream>
#include <set>

int main() {
    std::set<int> mySet;

    // Insert elements into the set
    mySet.insert(10);
    mySet.insert(5);
    mySet.insert(20);
    mySet.insert(15);
    
    // Print elements of the set
    for (int elem : mySet) {
        std::cout << elem << " ";
    }
    // Output: 5 10 15 20

    // Check if an element exists in the set
    if (mySet.find(10) != mySet.end()) {
        std::cout << "\n10 exists in the set.\n";
    }

    // Remove an element from the set
    mySet.erase(15);

    // Clear the set
    mySet.clear();

    // Check if the set is empty
    if (mySet.empty()) {
        std::cout << "Set is empty.\n";
    }

    return 0;
}
