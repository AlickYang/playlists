#include <iostream>
#include <map>

int main() {
	std::map<int, int> map;
	map.insert(std::pair<int, int>(4, 5));
	auto found = map.find(4); 
	if (found != map.cend()) {
		std::cout << found->second << "\n";
}	
return 0;
}
