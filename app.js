// ============================================================
// DSA COURSE TRACKER — APP.JS
// All course data + progress tracking via localStorage
// ============================================================

// ============================================================
// COURSE DATA — PART 1: DSA THEORY ROADMAP
// ============================================================
const roadmapData = [
  {
    id: "basics",
    number: "01",
    title: "Learn the Basics",
    subtopics: [
      {
        name: "C++ Basics",
        items: ["Input/output","Variables","If-else","Loops","Functions","Arrays basics","Strings basics","Pointers basics"]
      },
      {
        name: "C++ STL",
        items: ["Pair","Vector","List","Deque","Stack","Queue","Priority queue","Set","Multiset","Unordered set","Map","Unordered map","Sort","Lower bound","Upper bound"]
      },
      {
        name: "Time Complexity",
        items: ["Big O","O(1)","O(log n)","O(n)","O(n log n)","O(n²)","Space complexity"]
      }
    ],
    links: [
      { label: "A2Z YouTube Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { label: "C++ Tutorial", url: "https://takeuforward.org/c/c-tutorials-learn-cpp-for-free-best-resource" },
      { label: "C++ STL Tutorial", url: "https://takeuforward.org/c/c-stl-tutorial-most-frequent-used-stl-containers" }
    ]
  },
  {
    id: "sorting",
    number: "02",
    title: "Sorting",
    subtopics: [
      {
        name: "Basic Sorting",
        items: ["Selection Sort","Bubble Sort","Insertion Sort"]
      },
      {
        name: "Advanced Sorting",
        items: ["Merge Sort","Quick Sort","C++ STL sort"]
      }
    ],
    links: [
      { label: "A2Z YouTube Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { label: "Sorting Blogs", url: "https://takeuforward.org/blogs/sorting" }
    ]
  },
  {
    id: "arrays",
    number: "03",
    title: "Arrays",
    subtopics: [
      {
        name: "Arrays Easy",
        items: ["Largest element","Second largest element","Check if array is sorted","Remove duplicates from sorted array","Left rotate array by one","Left rotate array by D places","Move zeroes to end","Linear search","Union of two sorted arrays","Missing number","Maximum consecutive ones","Single number","Longest subarray with sum K"]
      },
      {
        name: "Arrays Medium",
        items: ["2 Sum","Sort 0s, 1s, 2s","Majority element","Kadane's algorithm","Stock buy and sell","Rearrange array by sign","Next permutation","Leaders in array","Longest consecutive sequence","Set matrix zeroes","Rotate matrix","Spiral matrix","Count subarrays with given sum"]
      },
      {
        name: "Arrays Hard",
        items: ["Pascal triangle","Majority element n/3","3 Sum","4 Sum","Largest subarray with 0 sum","Count subarrays with XOR K","Merge overlapping intervals","Merge two sorted arrays without extra space","Find missing and repeating number","Count inversions","Reverse pairs","Maximum product subarray"]
      }
    ],
    links: [
      { label: "Arrays Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rENwdL0nEH0uGom9no0nyB" },
      { label: "A2Z Sheet Arrays", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "binary-search",
    number: "04",
    title: "Binary Search",
    subtopics: [
      {
        name: "BS on 1D Array",
        items: ["Binary search basics","Lower bound","Upper bound","Search insert position","Floor and ceil","First and last occurrence","Count occurrences","Search in rotated sorted array","Minimum in rotated sorted array","Single element in sorted array","Peak element"]
      },
      {
        name: "BS on Answer",
        items: ["Square root of number","Nth root","Koko eating bananas","Minimum days to make bouquets","Smallest divisor","Capacity to ship packages","Aggressive cows","Book allocation","Painter partition","Split array largest sum","Median of two sorted arrays","Kth element of two sorted arrays"]
      },
      {
        name: "BS on 2D Arrays",
        items: ["Search in 2D matrix I","Search in 2D matrix II","Find peak element in 2D matrix","Matrix median"]
      }
    ],
    links: [
      { label: "Binary Search Playlist", url: "https://www.youtube.com/playlist?list=PLF6ChxadzFf8vjafLIxxbKUfarW4V4IOh" },
      { label: "Binary Search Tutorial", url: "https://takeuforward.org/data-structure/binary-search-explained" }
    ]
  },
  {
    id: "strings",
    number: "05",
    title: "Strings",
    subtopics: [
      {
        name: "Basic Strings",
        items: ["Remove outermost parentheses","Reverse words in string","Largest odd number in string","Longest common prefix","Isomorphic strings","Rotate string","Valid anagram","Sort characters by frequency"]
      },
      {
        name: "Medium Strings",
        items: ["Maximum nesting depth","Roman to integer","String to integer / atoi","Count number of substrings","Longest palindromic substring","Sum of beauty of substrings","Reverse every word"]
      }
    ],
    links: [
      { label: "A2Z Sheet Strings", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" },
      { label: "String Blogs", url: "https://takeuforward.org/blogs/string" }
    ]
  },
  {
    id: "linked-list",
    number: "06",
    title: "Linked List",
    subtopics: [
      {
        name: "Singly Linked List Basics",
        items: ["Introduction to linked list","Traversal","Length of linked list","Search in linked list","Insertion","Deletion"]
      },
      {
        name: "Doubly Linked List",
        items: ["Introduction to DLL","Insert node","Delete node","Reverse DLL"]
      },
      {
        name: "Medium Linked List",
        items: ["Middle of linked list","Reverse linked list","Detect cycle","Starting point of cycle","Length of cycle","Check palindrome LL","Odd-even LL","Remove Nth node from end","Delete middle node","Sort LL","Sort 0s, 1s, 2s in LL","Intersection point","Add 1 to LL","Add two numbers"]
      },
      {
        name: "Hard Linked List",
        items: ["Reverse nodes in K group","Rotate LL","Flattening of LL","Clone LL with random pointer"]
      }
    ],
    links: [
      { label: "Linked List Playlist", url: "https://www.youtube.com/playlist?list=PLJFSas9YT3kdDeSrFmqShVCY8QRWhHKWH" },
      { label: "Linked List Introduction", url: "https://takeuforward.org/linked-list/linked-list-introduction" }
    ]
  },
  {
    id: "recursion",
    number: "07",
    title: "Recursion & Backtracking",
    subtopics: [
      {
        name: "Recursion Basics",
        items: ["Introduction to recursion","Recursion tree","Stack space","Print name N times","Print 1 to N","Print N to 1","Sum of first N numbers","Factorial","Reverse array using recursion","Check palindrome using recursion","Fibonacci"]
      },
      {
        name: "Subsequences Pattern",
        items: ["Print all subsequences","Subsequences with sum K","Count subsequences with sum K","Combination sum I","Combination sum II","Subset sum I","Subset sum II"]
      },
      {
        name: "Backtracking",
        items: ["Permutations","N-Queens","Sudoku solver","M-coloring problem","Rat in a maze","Word break"]
      }
    ],
    links: [
      { label: "Recursion + Backtracking Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9" }
    ]
  },
  {
    id: "bit-manipulation",
    number: "08",
    title: "Bit Manipulation",
    subtopics: [
      {
        name: "Concepts",
        items: ["Binary representation","AND, OR, XOR","Left shift","Right shift","Check odd/even","Check ith bit","Set ith bit","Clear ith bit","Toggle ith bit","Remove last set bit","Check power of two","Count set bits"]
      },
      {
        name: "Problems",
        items: ["Single number","Single number II","Single number III","Power set","XOR from L to R","Divide two integers","Minimum bit flips","Prime factors using bit logic"]
      }
    ],
    links: [
      { label: "Bit Manipulation Blogs", url: "https://takeuforward.org/blogs/bit-manipulation" },
      { label: "A2Z Sheet", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "stack-queue",
    number: "09",
    title: "Stack & Queue",
    subtopics: [
      {
        name: "Stack Basics",
        items: ["Stack using array","Stack using linked list","Stack using queue","Min stack","Balanced parentheses"]
      },
      {
        name: "Infix / Prefix / Postfix",
        items: ["Infix to postfix","Prefix to infix","Prefix to postfix","Postfix to prefix","Postfix evaluation","Prefix evaluation"]
      },
      {
        name: "Monotonic Stack",
        items: ["Next greater element","Next greater element II","Next smaller element","Previous smaller element","Sum of subarray minimums","Asteroid collision","Daily temperatures","Stock span problem","Largest rectangle in histogram","Maximal rectangle","Trapping rainwater","Celebrity problem"]
      },
      {
        name: "Queue",
        items: ["Queue using array","Queue using linked list","Queue using stack","Circular queue","Deque","LRU cache","LFU cache"]
      }
    ],
    links: [
      { label: "Queue Blogs", url: "https://takeuforward.org/blogs/queue" },
      { label: "Stack Blogs", url: "https://takeuforward.org/blogs/stack" },
      { label: "A2Z Sheet", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "sliding-window",
    number: "10",
    title: "Sliding Window & Two Pointer",
    subtopics: [
      {
        name: "Two Pointer Patterns",
        items: ["Constant window","Longest subarray / substring pattern","Count subarrays pattern","Shortest / minimum window pattern"]
      },
      {
        name: "Sliding Window Problems",
        items: ["Maximum points from cards","Longest substring without repeating characters","Max consecutive ones III","Fruit into baskets","Longest repeating character replacement","Binary subarrays with sum","Count number of nice subarrays","Number of substrings containing all three characters","Maximum consecutive ones","Subarrays with K different integers","Minimum window substring","Minimum window subsequence"]
      }
    ],
    links: [
      { label: "Two Pointer & Sliding Window Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q7vrFA_HEWcqRqMpCXzYAL" }
    ]
  },
  {
    id: "heap",
    number: "11",
    title: "Heap / Priority Queue",
    subtopics: [
      {
        name: "Heap Basics",
        items: ["Min heap","Max heap","Priority queue STL","Heapify","Build heap","Insert in heap","Delete from heap","Heap sort"]
      },
      {
        name: "Heap Problems",
        items: ["Kth largest element","Kth smallest element","K most frequent elements","Sort K sorted array","Merge K sorted lists","Task scheduler","Hand of straights","Design Twitter","Connect ropes","Median from data stream"]
      }
    ],
    links: [
      { label: "Heap Blogs", url: "https://takeuforward.org/blogs/heap" },
      { label: "A2Z Sheet", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "greedy",
    number: "12",
    title: "Greedy Algorithms",
    subtopics: [
      {
        name: "Easy Greedy",
        items: ["Assign cookies","Fractional knapsack","Lemonade change","Valid parentheses checker"]
      },
      {
        name: "Medium / Hard Greedy",
        items: ["N meetings in one room","Minimum platforms","Job sequencing","Candy","Jump game I","Jump game II","Shortest job first","Page fault / LRU idea","Insert interval","Merge intervals","Non-overlapping intervals"]
      }
    ],
    links: [
      { label: "Greedy Algorithm Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rF1w2Koyh78zafB0cz7tea" },
      { label: "Greedy Blogs", url: "https://takeuforward.org/blogs/greedy" }
    ]
  },
  {
    id: "binary-trees",
    number: "13",
    title: "Binary Trees",
    subtopics: [
      {
        name: "Tree Basics + Traversals",
        items: ["Introduction to trees","Binary tree representation","Preorder traversal","Inorder traversal","Postorder traversal","Level order traversal","Iterative preorder","Iterative inorder","Iterative postorder","All traversals in one traversal"]
      },
      {
        name: "Medium Tree Problems",
        items: ["Height of binary tree","Check balanced tree","Diameter of binary tree","Maximum path sum","Check identical trees","Zig-zag traversal","Boundary traversal","Vertical order traversal","Top view","Bottom view","Right / left view","Symmetric tree"]
      },
      {
        name: "Hard Tree Problems",
        items: ["Root to node path","Lowest common ancestor","Maximum width","Children sum property","Nodes at distance K","Burning tree","Count nodes in complete binary tree","Construct tree from inorder + preorder","Construct tree from inorder + postorder","Serialize and deserialize tree","Morris traversal","Flatten binary tree"]
      }
    ],
    links: [
      { label: "Binary Trees + BST Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk" },
      { label: "Tree Series Page", url: "https://takeuforward.org/data-structure/strivers-tree-series-tree-data-structure" }
    ]
  },
  {
    id: "bst",
    number: "14",
    title: "Binary Search Tree",
    subtopics: [
      {
        name: "BST Concepts",
        items: ["BST introduction","Search in BST","Ceil in BST","Floor in BST","Insert node in BST","Delete node in BST","Kth smallest / largest","Validate BST","LCA in BST","Construct BST from preorder","Inorder successor / predecessor","BST iterator","Two sum in BST","Recover BST","Largest BST in binary tree"]
      }
    ],
    links: [
      { label: "Binary Trees + BST Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0q8Hkd7bK2Bpryj2xVJk8Vk" },
      { label: "A2Z Sheet BST", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "graphs",
    number: "15",
    title: "Graphs",
    subtopics: [
      {
        name: "Graph Basics",
        items: ["Graph introduction","Types of graphs","Graph representation","Adjacency matrix","Adjacency list","Connected components"]
      },
      {
        name: "BFS / DFS",
        items: ["BFS","DFS","Number of provinces","Number of islands","Flood fill","Rotten oranges","Cycle detection in undirected graph (BFS)","Cycle detection in undirected graph (DFS)","Distance of nearest cell having 1","Surrounded regions","Number of enclaves","Word ladder"]
      },
      {
        name: "Directed Graphs + Topological Sort",
        items: ["Cycle detection in directed graph","Topological sort DFS","Kahn's algorithm","Course schedule I","Course schedule II","Find eventual safe states","Alien dictionary"]
      },
      {
        name: "Shortest Path",
        items: ["Shortest path in DAG","Shortest path in undirected graph","Word ladder II","Dijkstra algorithm","Shortest path in weighted undirected graph","Binary maze shortest path","Path with minimum effort","Cheapest flights within K stops","Minimum multiplications","Number of ways to arrive at destination","Bellman Ford","Floyd Warshall","City with smallest number of neighbors"]
      },
      {
        name: "MST + DSU",
        items: ["Minimum spanning tree","Prim's algorithm","Disjoint Set Union","Union by rank","Union by size","Path compression","Kruskal's algorithm","Number of operations to make network connected","Most stones removed","Accounts merge","Number of islands II","Making a large island","Swim in rising water"]
      },
      {
        name: "Advanced Graph",
        items: ["Bridges in graph","Articulation point","Kosaraju algorithm"]
      }
    ],
    links: [
      { label: "Full Graph Series", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn" },
      { label: "Graph Revision Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw" },
      { label: "Graph Sheet Page", url: "https://takeuforward.org/graph/striver-graph-series-top-graph-interview-questions" }
    ]
  },
  {
    id: "dp",
    number: "16",
    title: "Dynamic Programming",
    subtopics: [
      {
        name: "DP Basics",
        items: ["Introduction to DP","Memoization","Tabulation","Space optimization","Fibonacci","Climbing stairs","Frog jump","Frog jump with K distance","Maximum sum of non-adjacent elements","House robber"]
      },
      {
        name: "DP on Grids",
        items: ["Ninja training","Unique paths","Unique paths II","Minimum path sum","Triangle minimum path sum","Maximum falling path sum","Cherry pickup II"]
      },
      {
        name: "DP on Subsequences",
        items: ["Subset sum equal to target","Partition equal subset sum","Partition with minimum difference","Count subsets with sum K","Count partitions with given difference","0/1 knapsack","Minimum coins","Target sum","Coin change II","Unbounded knapsack","Rod cutting"]
      },
      {
        name: "DP on Strings",
        items: ["Longest common subsequence","Print LCS","Longest common substring","Longest palindromic subsequence","Minimum insertions to make palindrome","Minimum insertions/deletions to convert string","Shortest common supersequence","Distinct subsequences","Edit distance","Wildcard matching"]
      },
      {
        name: "DP on Stocks",
        items: ["Buy and sell stock I","Buy and sell stock II","Buy and sell stock III","Buy and sell stock IV","Buy and sell with cooldown","Buy and sell with transaction fee"]
      },
      {
        name: "LIS + Partition DP",
        items: ["Longest increasing subsequence","Print LIS","Largest divisible subset","Longest string chain","Longest bitonic subsequence","Number of LIS","Matrix chain multiplication","Minimum cost to cut stick","Burst balloons","Boolean parenthesization","Palindrome partitioning II","Partition array for maximum sum"]
      },
      {
        name: "DP on Squares",
        items: ["Maximum rectangle with all 1s","Count square submatrices with all 1s"]
      }
    ],
    links: [
      { label: "DP Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0qUlt5H_kiKYaNSqJ81PMMY" },
      { label: "DP Revision Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0pwFf-BnpkXxs0Ra0eU2sJY" }
    ]
  },
  {
    id: "tries",
    number: "17",
    title: "Tries",
    subtopics: [
      {
        name: "Trie Basics",
        items: ["Trie introduction","Insert word","Search word","Starts with prefix","Count words equal to","Count words starting with","Erase word"]
      },
      {
        name: "Trie Problems",
        items: ["Longest word with all prefixes","Count distinct substrings","Maximum XOR of two numbers","Maximum XOR with offline queries"]
      }
    ],
    links: [
      { label: "Trie Blogs", url: "https://takeuforward.org/blogs/trie" },
      { label: "A2Z Sheet Trie", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "advanced-strings",
    number: "18",
    title: "Advanced String Algorithms",
    subtopics: [
      {
        name: "Advanced Patterns",
        items: ["Z-function","KMP algorithm","Rabin Karp","Shortest palindrome","Longest happy prefix","Count palindromic substrings","Manacher's algorithm basics"]
      }
    ],
    links: [
      { label: "String Blogs", url: "https://takeuforward.org/blogs/string" },
      { label: "A2Z Sheet Extra Strings", url: "https://takeuforward.org/dsa/strivers-a2z-sheet-learn-dsa-a-to-z" }
    ]
  },
  {
    id: "final-revision",
    number: "19",
    title: "Final Interview Revision",
    subtopics: [
      {
        name: "Revision Sheets",
        items: ["Complete Striver SDE Sheet","Complete 79 Last Moment Sheet","Complete Placement Series"]
      }
    ],
    links: [
      { label: "SDE Sheet", url: "https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems" },
      { label: "79 Last Moment Sheet", url: "https://takeuforward.org/dsa/strivers-79-last-moment-dsa-sheet-ace-interviews" },
      { label: "Placement Series Playlist", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0p4ozDR_kJJkONnb1wdx2Ma" }
    ]
  }
];

// ============================================================
// COURSE DATA — PART 2: PRACTICE SHEET (PROBLEMS)
// ============================================================
const practiceData = [
  {
    id: "practice-sorting",
    number: "01",
    title: "Sorting",
    goal: "Learn how sorting is used for arranging data, greedy decisions, two pointer, frequency counting, interval problems, minimizing / maximizing.",
    levels: {
      easy: [
        { name: "Sort Array By Parity", platform: "LeetCode", url: "https://leetcode.com/problems/sort-array-by-parity/" },
        { name: "Squares of a Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/squares-of-a-sorted-array/" },
        { name: "Merge Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/merge-sorted-array/" },
        { name: "Relative Sort Array", platform: "LeetCode", url: "https://leetcode.com/problems/relative-sort-array/" },
        { name: "Sort Integers by The Number of 1 Bits", platform: "LeetCode", url: "https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/" },
        { name: "Maximum Product of Two Elements in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/" },
        { name: "Height Checker", platform: "LeetCode", url: "https://leetcode.com/problems/height-checker/" },
        { name: "Can Make Arithmetic Progression From Sequence", platform: "LeetCode", url: "https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/" },
        { name: "Helpful Maths", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/339/A" },
        { name: "Gravity Flip", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/405/A" },
        { name: "Twins", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/160/A" },
        { name: "Sale", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/34/B" },
        { name: "Remove Smallest", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1399/A" },
        { name: "Dragons", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/230/A" },
        { name: "BerSU Ball", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/489/B" }
      ],
      medium: [
        { name: "Sort an Array", platform: "LeetCode", url: "https://leetcode.com/problems/sort-an-array/" },
        { name: "Sort Colors", platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/" },
        { name: "3Sum", platform: "LeetCode", url: "https://leetcode.com/problems/3sum/" },
        { name: "3Sum Closest", platform: "LeetCode", url: "https://leetcode.com/problems/3sum-closest/" },
        { name: "4Sum", platform: "LeetCode", url: "https://leetcode.com/problems/4sum/" },
        { name: "Merge Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/merge-intervals/" },
        { name: "Insert Interval", platform: "LeetCode", url: "https://leetcode.com/problems/insert-interval/" },
        { name: "Non-overlapping Intervals", platform: "LeetCode", url: "https://leetcode.com/problems/non-overlapping-intervals/" },
        { name: "Meeting Rooms II", platform: "LeetCode", url: "https://leetcode.com/problems/meeting-rooms-ii/" },
        { name: "Top K Frequent Elements", platform: "LeetCode", url: "https://leetcode.com/problems/top-k-frequent-elements/" },
        { name: "Kth Largest Element in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        { name: "H-Index", platform: "LeetCode", url: "https://leetcode.com/problems/h-index/" },
        { name: "Bag of Tokens", platform: "LeetCode", url: "https://leetcode.com/problems/bag-of-tokens/" },
        { name: "Number of Pairs", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1538/C" },
        { name: "Interesting Drink", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/706/B" },
        { name: "Kuriyama Mirai's Stones", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/433/B" },
        { name: "Towers", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/37/A" },
        { name: "Pashmak and Flowers", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/459/B" },
        { name: "Business Trip", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/149/A" }
      ],
      hard: [
        { name: "Count of Smaller Numbers After Self", platform: "LeetCode", url: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
        { name: "Reverse Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-pairs/" },
        { name: "Maximum Gap", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-gap/" },
        { name: "Find Median from Data Stream", platform: "LeetCode", url: "https://leetcode.com/problems/find-median-from-data-stream/" },
        { name: "The Skyline Problem", platform: "LeetCode", url: "https://leetcode.com/problems/the-skyline-problem/" },
        { name: "Smallest Range Covering Elements from K Lists", platform: "LeetCode", url: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/" },
        { name: "Maximum Median", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1201/C" },
        { name: "Pair of Topics", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1324/D" },
        { name: "Yet Another Problem About Dividing Numbers", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1538/D" }
      ]
    }
  },
  {
    id: "practice-arrays",
    number: "02",
    title: "Arrays",
    goal: "Master traversal, frequency, prefix sum, two pointer, sliding window, Kadane's algorithm, subarray thinking, matrix basics.",
    levels: {
      easy: [
        { name: "Running Sum of 1d Array", platform: "LeetCode", url: "https://leetcode.com/problems/running-sum-of-1d-array/" },
        { name: "Richest Customer Wealth", platform: "LeetCode", url: "https://leetcode.com/problems/richest-customer-wealth/" },
        { name: "Find Numbers with Even Number of Digits", platform: "LeetCode", url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/" },
        { name: "Max Consecutive Ones", platform: "LeetCode", url: "https://leetcode.com/problems/max-consecutive-ones/" },
        { name: "Move Zeroes", platform: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/" },
        { name: "Remove Duplicates from Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        { name: "Remove Element", platform: "LeetCode", url: "https://leetcode.com/problems/remove-element/" },
        { name: "Plus One", platform: "LeetCode", url: "https://leetcode.com/problems/plus-one/" },
        { name: "Two Sum", platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/" },
        { name: "Contains Duplicate", platform: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/" },
        { name: "Best Time to Buy and Sell Stock", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
        { name: "Missing Number", platform: "LeetCode", url: "https://leetcode.com/problems/missing-number/" },
        { name: "Single Number", platform: "LeetCode", url: "https://leetcode.com/problems/single-number/" },
        { name: "Majority Element", platform: "LeetCode", url: "https://leetcode.com/problems/majority-element/" },
        { name: "Intersection of Two Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/intersection-of-two-arrays/" },
        { name: "Intersection of Two Arrays II", platform: "LeetCode", url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" },
        { name: "Beautiful Matrix", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/263/A" },
        { name: "Sereja and Dima", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/381/A" },
        { name: "Presents", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/136/A" },
        { name: "Team Olympiad", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/490/A" },
        { name: "I Wanna Be the Guy", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/469/A" },
        { name: "Magnets", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/344/A" }
      ],
      medium: [
        { name: "Product of Array Except Self", platform: "LeetCode", url: "https://leetcode.com/problems/product-of-array-except-self/" },
        { name: "Maximum Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/" },
        { name: "Maximum Product Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-product-subarray/" },
        { name: "Subarray Sum Equals K", platform: "LeetCode", url: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        { name: "Continuous Subarray Sum", platform: "LeetCode", url: "https://leetcode.com/problems/continuous-subarray-sum/" },
        { name: "Minimum Size Subarray Sum", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-size-subarray-sum/" },
        { name: "Container With Most Water", platform: "LeetCode", url: "https://leetcode.com/problems/container-with-most-water/" },
        { name: "Rotate Array", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-array/" },
        { name: "Next Permutation", platform: "LeetCode", url: "https://leetcode.com/problems/next-permutation/" },
        { name: "Spiral Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/spiral-matrix/" },
        { name: "Rotate Image", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-image/" },
        { name: "Set Matrix Zeroes", platform: "LeetCode", url: "https://leetcode.com/problems/set-matrix-zeroes/" },
        { name: "Game of Life", platform: "LeetCode", url: "https://leetcode.com/problems/game-of-life/" },
        { name: "Find All Duplicates in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
        { name: "Find All Numbers Disappeared in an Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
        { name: "Majority Element II", platform: "LeetCode", url: "https://leetcode.com/problems/majority-element-ii/" },
        { name: "Longest Consecutive Sequence", platform: "LeetCode", url: "https://leetcode.com/problems/longest-consecutive-sequence/" },
        { name: "Find the Duplicate Number", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-duplicate-number/" },
        { name: "Three Parts of the Array", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1006/C" },
        { name: "Books", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/279/B" },
        { name: "Number of Ways", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/466/C" },
        { name: "Little Girl and Maximum Sum", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/276/C" },
        { name: "Kefa and Company", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/580/B" },
        { name: "They Are Everywhere", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/701/C" }
      ],
      hard: [
        { name: "First Missing Positive", platform: "LeetCode", url: "https://leetcode.com/problems/first-missing-positive/" },
        { name: "Trapping Rain Water", platform: "LeetCode", url: "https://leetcode.com/problems/trapping-rain-water/" },
        { name: "Candy", platform: "LeetCode", url: "https://leetcode.com/problems/candy/" },
        { name: "Merge k Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { name: "Sliding Window Maximum", platform: "LeetCode", url: "https://leetcode.com/problems/sliding-window-maximum/" },
        { name: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/" },
        { name: "Maximum Sum of 3 Non-Overlapping Subarrays", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/" },
        { name: "Shortest Subarray with Sum at Least K", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/" },
        { name: "Subarray Sorting", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1187/D" },
        { name: "Zero Quantity Maximization", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1133/D" }
      ]
    }
  },
  {
    id: "practice-binary-search",
    number: "03",
    title: "Binary Search",
    goal: "Master normal binary search, binary search on answer, and binary search in rotated / matrix / advanced spaces.",
    levels: {
      easy: [
        { name: "Binary Search", platform: "LeetCode", url: "https://leetcode.com/problems/binary-search/" },
        { name: "Search Insert Position", platform: "LeetCode", url: "https://leetcode.com/problems/search-insert-position/" },
        { name: "Sqrt(x)", platform: "LeetCode", url: "https://leetcode.com/problems/sqrtx/" },
        { name: "Valid Perfect Square", platform: "LeetCode", url: "https://leetcode.com/problems/valid-perfect-square/" },
        { name: "Guess Number Higher or Lower", platform: "LeetCode", url: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
        { name: "Arranging Coins", platform: "LeetCode", url: "https://leetcode.com/problems/arranging-coins/" },
        { name: "First Bad Version", platform: "LeetCode", url: "https://leetcode.com/problems/first-bad-version/" },
        { name: "Two Sum II", platform: "LeetCode", url: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
        { name: "Binary Search Step 1 Practice", platform: "Codeforces", url: "https://codeforces.com/edu/course/2/lesson/6/1/practice" },
        { name: "Worms", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/474/B" },
        { name: "Interesting Drink", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/706/B" },
        { name: "Burning Midnight Oil", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/165/B" }
      ],
      medium: [
        { name: "Find First and Last Position", platform: "LeetCode", url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
        { name: "Search in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
        { name: "Search in Rotated Sorted Array II", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
        { name: "Find Minimum in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
        { name: "Find Peak Element", platform: "LeetCode", url: "https://leetcode.com/problems/find-peak-element/" },
        { name: "Single Element in a Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/single-element-in-a-sorted-array/" },
        { name: "Search a 2D Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/search-a-2d-matrix/" },
        { name: "Search a 2D Matrix II", platform: "LeetCode", url: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
        { name: "Koko Eating Bananas", platform: "LeetCode", url: "https://leetcode.com/problems/koko-eating-bananas/" },
        { name: "Capacity To Ship Packages Within D Days", platform: "LeetCode", url: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
        { name: "Minimized Maximum of Products Distributed", platform: "LeetCode", url: "https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/" },
        { name: "Find K Closest Elements", platform: "LeetCode", url: "https://leetcode.com/problems/find-k-closest-elements/" },
        { name: "Find Right Interval", platform: "LeetCode", url: "https://leetcode.com/problems/find-right-interval/" },
        { name: "Time Based Key-Value Store", platform: "LeetCode", url: "https://leetcode.com/problems/time-based-key-value-store/" },
        { name: "Binary Search Step 2 Practice", platform: "Codeforces", url: "https://codeforces.com/edu/course/2/lesson/6/2/practice" },
        { name: "Hamburgers", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/371/C" },
        { name: "Number of Pairs", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1538/C" },
        { name: "Maximum Median", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1201/C" },
        { name: "New Bakery", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1978/B" }
      ],
      hard: [
        { name: "Median of Two Sorted Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
        { name: "Split Array Largest Sum", platform: "LeetCode", url: "https://leetcode.com/problems/split-array-largest-sum/" },
        { name: "Find in Mountain Array", platform: "LeetCode", url: "https://leetcode.com/problems/find-in-mountain-array/" },
        { name: "Kth Smallest Product of Two Sorted Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/" },
        { name: "Minimum Number of Removals to Make Mountain", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/" },
        { name: "Maximum Average Subarray II", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-average-subarray-ii/" },
        { name: "Minimize Max Distance to Gas Station", platform: "LeetCode", url: "https://leetcode.com/problems/minimize-max-distance-to-gas-station/" },
        { name: "Binary Search Step 3 Practice", platform: "Codeforces", url: "https://codeforces.com/edu/course/2/lesson/6/3/practice" },
        { name: "Binary Search Step 4 Practice", platform: "Codeforces", url: "https://codeforces.com/edu/course/2/lesson/6/4/practice" },
        { name: "Pair of Topics", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1324/D" },
        { name: "Magic Powder 1", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/670/D1" },
        { name: "Magic Powder 2", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/670/D2" }
      ]
    }
  },
  {
    id: "practice-strings",
    number: "04",
    title: "Strings",
    goal: "Master character frequency, two pointer on strings, string simulation, palindrome, hashing idea, pattern matching basics.",
    levels: {
      easy: [
        { name: "Valid Palindrome", platform: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/" },
        { name: "Reverse String", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-string/" },
        { name: "Reverse Vowels of a String", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-vowels-of-a-string/" },
        { name: "First Unique Character in a String", platform: "LeetCode", url: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
        { name: "Valid Anagram", platform: "LeetCode", url: "https://leetcode.com/problems/valid-anagram/" },
        { name: "Ransom Note", platform: "LeetCode", url: "https://leetcode.com/problems/ransom-note/" },
        { name: "Isomorphic Strings", platform: "LeetCode", url: "https://leetcode.com/problems/isomorphic-strings/" },
        { name: "Longest Common Prefix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-common-prefix/" },
        { name: "Roman to Integer", platform: "LeetCode", url: "https://leetcode.com/problems/roman-to-integer/" },
        { name: "Find Index of First Occurrence", platform: "LeetCode", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
        { name: "Way Too Long Words", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/71/A" },
        { name: "Petya and Strings", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/112/A" },
        { name: "Word Capitalization", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/281/A" },
        { name: "String Task", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/118/A" },
        { name: "Word", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/59/A" },
        { name: "Boy or Girl", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/236/A" },
        { name: "Stones on the Table", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/266/A" },
        { name: "Pangram", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/520/A" },
        { name: "Anton and Danik", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/734/A" }
      ],
      medium: [
        { name: "Longest Substring Without Repeating Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        { name: "Longest Palindromic Substring", platform: "LeetCode", url: "https://leetcode.com/problems/longest-palindromic-substring/" },
        { name: "Group Anagrams", platform: "LeetCode", url: "https://leetcode.com/problems/group-anagrams/" },
        { name: "String to Integer (atoi)", platform: "LeetCode", url: "https://leetcode.com/problems/string-to-integer-atoi/" },
        { name: "Integer to Roman", platform: "LeetCode", url: "https://leetcode.com/problems/integer-to-roman/" },
        { name: "Zigzag Conversion", platform: "LeetCode", url: "https://leetcode.com/problems/zigzag-conversion/" },
        { name: "Decode String", platform: "LeetCode", url: "https://leetcode.com/problems/decode-string/" },
        { name: "Generate Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/generate-parentheses/" },
        { name: "Letter Combinations of a Phone Number", platform: "LeetCode", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
        { name: "Palindromic Substrings", platform: "LeetCode", url: "https://leetcode.com/problems/palindromic-substrings/" },
        { name: "Partition Labels", platform: "LeetCode", url: "https://leetcode.com/problems/partition-labels/" },
        { name: "Minimum Remove to Make Valid Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
        { name: "Remove All Adjacent Duplicates in String II", platform: "LeetCode", url: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/" },
        { name: "Custom Sort String", platform: "LeetCode", url: "https://leetcode.com/problems/custom-sort-string/" },
        { name: "Dubstep", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/208/A" },
        { name: "Registration System", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/4/C" },
        { name: "Password", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/126/B" },
        { name: "Prefixes and Suffixes", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/432/D" },
        { name: "Vasya and Password", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1051/A" },
        { name: "Chat room", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/58/A" }
      ],
      hard: [
        { name: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/" },
        { name: "Regular Expression Matching", platform: "LeetCode", url: "https://leetcode.com/problems/regular-expression-matching/" },
        { name: "Wildcard Matching", platform: "LeetCode", url: "https://leetcode.com/problems/wildcard-matching/" },
        { name: "Word Break II", platform: "LeetCode", url: "https://leetcode.com/problems/word-break-ii/" },
        { name: "Palindrome Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-pairs/" },
        { name: "Shortest Palindrome", platform: "LeetCode", url: "https://leetcode.com/problems/shortest-palindrome/" },
        { name: "Longest Valid Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/longest-valid-parentheses/" },
        { name: "Text Justification", platform: "LeetCode", url: "https://leetcode.com/problems/text-justification/" },
        { name: "Good Substrings", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/271/D" },
        { name: "Password (KMP)", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/126/B" },
        { name: "Prefixes and Suffixes (Advanced)", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/432/D" }
      ]
    }
  },
  {
    id: "practice-linked-list",
    number: "05",
    title: "Linked List",
    goal: "Master node structure, traversal, insertion/deletion logic, slow-fast pointer, reversal, merge logic, cycle detection.",
    levels: {
      easy: [
        { name: "Delete Node in a Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
        { name: "Reverse Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-linked-list/" },
        { name: "Merge Two Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { name: "Linked List Cycle", platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle/" },
        { name: "Middle of the Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/middle-of-the-linked-list/" },
        { name: "Palindrome Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-linked-list/" },
        { name: "Remove Duplicates from Sorted List", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
        { name: "Intersection of Two Linked Lists", platform: "LeetCode", url: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
        { name: "Convert Binary Number in LL to Integer", platform: "LeetCode", url: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" }
      ],
      medium: [
        { name: "Add Two Numbers", platform: "LeetCode", url: "https://leetcode.com/problems/add-two-numbers/" },
        { name: "Remove Nth Node From End of List", platform: "LeetCode", url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
        { name: "Swap Nodes in Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
        { name: "Rotate List", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-list/" },
        { name: "Partition List", platform: "LeetCode", url: "https://leetcode.com/problems/partition-list/" },
        { name: "Remove Duplicates from Sorted List II", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/" },
        { name: "Linked List Cycle II", platform: "LeetCode", url: "https://leetcode.com/problems/linked-list-cycle-ii/" },
        { name: "Reorder List", platform: "LeetCode", url: "https://leetcode.com/problems/reorder-list/" },
        { name: "Sort List", platform: "LeetCode", url: "https://leetcode.com/problems/sort-list/" },
        { name: "Odd Even Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/odd-even-linked-list/" },
        { name: "Design Linked List", platform: "LeetCode", url: "https://leetcode.com/problems/design-linked-list/" },
        { name: "Copy List with Random Pointer", platform: "LeetCode", url: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
        { name: "Flatten a Multilevel Doubly LL", platform: "LeetCode", url: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
        { name: "Insertion Sort List", platform: "LeetCode", url: "https://leetcode.com/problems/insertion-sort-list/" },
        { name: "Split Linked List in Parts", platform: "LeetCode", url: "https://leetcode.com/problems/split-linked-list-in-parts/" }
      ],
      hard: [
        { name: "Reverse Nodes in k-Group", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
        { name: "Merge k Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-k-sorted-lists/" },
        { name: "LRU Cache", platform: "LeetCode", url: "https://leetcode.com/problems/lru-cache/" },
        { name: "LFU Cache", platform: "LeetCode", url: "https://leetcode.com/problems/lfu-cache/" },
        { name: "All O'one Data Structure", platform: "LeetCode", url: "https://leetcode.com/problems/all-oone-data-structure/" }
      ]
    }
  },
  {
    id: "practice-recursion",
    number: "06",
    title: "Recursion & Backtracking",
    goal: "Master base case, recursive calls, recursion tree, backtracking choose/explore/unchoose, subsets/permutations/combination pattern.",
    levels: {
      easy: [
        { name: "Fibonacci Number", platform: "LeetCode", url: "https://leetcode.com/problems/fibonacci-number/" },
        { name: "N-th Tribonacci Number", platform: "LeetCode", url: "https://leetcode.com/problems/n-th-tribonacci-number/" },
        { name: "Power of Two", platform: "LeetCode", url: "https://leetcode.com/problems/power-of-two/" },
        { name: "Reverse String", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-string/" },
        { name: "Pascal's Triangle", platform: "LeetCode", url: "https://leetcode.com/problems/pascals-triangle/" },
        { name: "Climbing Stairs", platform: "LeetCode", url: "https://leetcode.com/problems/climbing-stairs/" },
        { name: "Merge Two Sorted Lists", platform: "LeetCode", url: "https://leetcode.com/problems/merge-two-sorted-lists/" },
        { name: "Same Tree", platform: "LeetCode", url: "https://leetcode.com/problems/same-tree/" },
        { name: "Maximum Depth of Binary Tree", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
        { name: "Again Twenty Five!", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/630/A" },
        { name: "Theatre Square", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/1/A" }
      ],
      medium: [
        { name: "Subsets", platform: "LeetCode", url: "https://leetcode.com/problems/subsets/" },
        { name: "Subsets II", platform: "LeetCode", url: "https://leetcode.com/problems/subsets-ii/" },
        { name: "Permutations", platform: "LeetCode", url: "https://leetcode.com/problems/permutations/" },
        { name: "Permutations II", platform: "LeetCode", url: "https://leetcode.com/problems/permutations-ii/" },
        { name: "Combinations", platform: "LeetCode", url: "https://leetcode.com/problems/combinations/" },
        { name: "Combination Sum", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum/" },
        { name: "Combination Sum II", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum-ii/" },
        { name: "Combination Sum III", platform: "LeetCode", url: "https://leetcode.com/problems/combination-sum-iii/" },
        { name: "Generate Parentheses", platform: "LeetCode", url: "https://leetcode.com/problems/generate-parentheses/" },
        { name: "Letter Combinations of a Phone Number", platform: "LeetCode", url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
        { name: "Palindrome Partitioning", platform: "LeetCode", url: "https://leetcode.com/problems/palindrome-partitioning/" },
        { name: "Word Search", platform: "LeetCode", url: "https://leetcode.com/problems/word-search/" },
        { name: "Restore IP Addresses", platform: "LeetCode", url: "https://leetcode.com/problems/restore-ip-addresses/" },
        { name: "Pow(x, n)", platform: "LeetCode", url: "https://leetcode.com/problems/powx-n/" },
        { name: "K-th Symbol in Grammar", platform: "LeetCode", url: "https://leetcode.com/problems/k-th-symbol-in-grammar/" },
        { name: "Beautiful Arrangement", platform: "LeetCode", url: "https://leetcode.com/problems/beautiful-arrangement/" },
        { name: "Recursive Queries", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/932/B" },
        { name: "Kefa and Park", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/580/C" },
        { name: "Journey", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/839/C" },
        { name: "Two Buttons", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/520/B" }
      ],
      hard: [
        { name: "N-Queens", platform: "LeetCode", url: "https://leetcode.com/problems/n-queens/" },
        { name: "N-Queens II", platform: "LeetCode", url: "https://leetcode.com/problems/n-queens-ii/" },
        { name: "Sudoku Solver", platform: "LeetCode", url: "https://leetcode.com/problems/sudoku-solver/" },
        { name: "Word Break II", platform: "LeetCode", url: "https://leetcode.com/problems/word-break-ii/" },
        { name: "Expression Add Operators", platform: "LeetCode", url: "https://leetcode.com/problems/expression-add-operators/" },
        { name: "Regular Expression Matching", platform: "LeetCode", url: "https://leetcode.com/problems/regular-expression-matching/" },
        { name: "Wildcard Matching", platform: "LeetCode", url: "https://leetcode.com/problems/wildcard-matching/" },
        { name: "Unique Paths III", platform: "LeetCode", url: "https://leetcode.com/problems/unique-paths-iii/" },
        { name: "Word Search II", platform: "LeetCode", url: "https://leetcode.com/problems/word-search-ii/" },
        { name: "Xenia and Tree", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/342/E" },
        { name: "Anton and Tree", platform: "Codeforces", url: "https://codeforces.com/problemset/problem/734/E" }
      ]
    }
  }
];

// ============================================================
// STORAGE HELPERS
// ============================================================
const STORAGE_KEY = 'dsa-tracker-progress';

function loadProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function toggleItem(key) {
  const progress = loadProgress();
  progress[key] = !progress[key];
  if (!progress[key]) delete progress[key];
  saveProgress(progress);
  updateAllProgress();
}

function isCompleted(key) {
  return !!loadProgress()[key];
}

function resetAllProgress() {
  if (confirm('Are you sure you want to reset ALL progress? This cannot be undone.')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// ============================================================
// PROGRESS COUNTERS
// ============================================================
function countRoadmapItems() {
  let total = 0;
  roadmapData.forEach(topic => {
    topic.subtopics.forEach(sub => {
      total += sub.items.length;
    });
  });
  return total;
}

function countRoadmapCompleted() {
  const progress = loadProgress();
  let count = 0;
  roadmapData.forEach(topic => {
    topic.subtopics.forEach(sub => {
      sub.items.forEach((item, i) => {
        const key = `roadmap-${topic.id}-${sub.name}-${i}`;
        if (progress[key]) count++;
      });
    });
  });
  return count;
}

function countPracticeItems() {
  let total = 0;
  practiceData.forEach(topic => {
    ['easy','medium','hard'].forEach(level => {
      if (topic.levels[level]) total += topic.levels[level].length;
    });
  });
  return total;
}

function countPracticeCompleted() {
  const progress = loadProgress();
  let count = 0;
  practiceData.forEach(topic => {
    ['easy','medium','hard'].forEach(level => {
      if (topic.levels[level]) {
        topic.levels[level].forEach((_, i) => {
          const key = `practice-${topic.id}-${level}-${i}`;
          if (progress[key]) count++;
        });
      }
    });
  });
  return count;
}

function getTopicProgress(topicId, type) {
  const progress = loadProgress();
  let total = 0, completed = 0;
  if (type === 'roadmap') {
    const topic = roadmapData.find(t => t.id === topicId);
    if (!topic) return { total: 0, completed: 0 };
    topic.subtopics.forEach(sub => {
      sub.items.forEach((_, i) => {
        total++;
        if (progress[`roadmap-${topicId}-${sub.name}-${i}`]) completed++;
      });
    });
  } else {
    const topic = practiceData.find(t => t.id === topicId);
    if (!topic) return { total: 0, completed: 0 };
    ['easy','medium','hard'].forEach(level => {
      if (topic.levels[level]) {
        topic.levels[level].forEach((_, i) => {
          total++;
          if (progress[`practice-${topicId}-${level}-${i}`]) completed++;
        });
      }
    });
  }
  return { total, completed };
}

// ============================================================
// RENDERING
// ============================================================
function renderHeroStats() {
  const totalRoadmap = countRoadmapItems();
  const doneRoadmap = countRoadmapCompleted();
  const totalPractice = countPracticeItems();
  const donePractice = countPracticeCompleted();
  const totalAll = totalRoadmap + totalPractice;
  const doneAll = doneRoadmap + donePractice;
  const pct = totalAll ? Math.round((doneAll / totalAll) * 100) : 0;

  document.getElementById('hero-total-topics').textContent = totalRoadmap;
  document.getElementById('hero-total-problems').textContent = totalPractice;
  document.getElementById('hero-solved').textContent = doneAll;
  document.getElementById('hero-percentage').textContent = `${pct}%`;

  // Progress ring
  const circle = document.getElementById('progress-ring-circle');
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (pct / 100) * circumference;
  }

  // Top bar progress
  const topFill = document.getElementById('top-bar-progress-fill');
  const topText = document.getElementById('top-bar-progress-text');
  if (topFill) topFill.style.width = `${pct}%`;
  if (topText) topText.textContent = `${pct}%`;
}

function renderDashboardStats() {
  const totalRoadmap = countRoadmapItems();
  const doneRoadmap = countRoadmapCompleted();
  const totalPractice = countPracticeItems();
  const donePractice = countPracticeCompleted();

  document.getElementById('stat-topics-done').textContent = `${doneRoadmap}/${totalRoadmap}`;
  document.getElementById('stat-problems-done').textContent = `${donePractice}/${totalPractice}`;

  // Count easy/medium/hard
  const progress = loadProgress();
  let easyDone = 0, medDone = 0, hardDone = 0;
  practiceData.forEach(topic => {
    ['easy','medium','hard'].forEach(level => {
      if (topic.levels[level]) {
        topic.levels[level].forEach((_, i) => {
          if (progress[`practice-${topic.id}-${level}-${i}`]) {
            if (level === 'easy') easyDone++;
            else if (level === 'medium') medDone++;
            else hardDone++;
          }
        });
      }
    });
  });
  document.getElementById('stat-easy').textContent = easyDone;
  document.getElementById('stat-hard').textContent = `${medDone}M / ${hardDone}H`;
}

function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  container.innerHTML = '';

  roadmapData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'roadmap');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = `roadmap-${topic.id}`;

    card.innerHTML = `
      <div class="topic-header" onclick="toggleTopic(this)">
        <span class="topic-number">${topic.number}</span>
        <div class="topic-info">
          <div class="topic-name">${topic.title}</div>
          <div class="topic-meta">
            <span>${prog.completed}/${prog.total} completed</span>
          </div>
        </div>
        <div class="topic-progress-bar">
          <div class="topic-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="topic-progress-text">${pct}%</span>
        <span class="topic-chevron">▾</span>
      </div>
      <div class="topic-body">
        <div class="topic-content">
          ${topic.subtopics.map(sub => `
            <div class="subtopic-group">
              <div class="subtopic-group-title">${sub.name}</div>
              <ul class="subtopic-list">
                ${sub.items.map((item, i) => {
                  const key = `roadmap-${topic.id}-${sub.name}-${i}`;
                  const done = isCompleted(key);
                  return `
                    <li class="subtopic-item ${done ? 'completed' : ''}">
                      <label>
                        <div class="custom-checkbox">
                          <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleItem('${key}'); this.closest('.subtopic-item').classList.toggle('completed')">
                          <span class="checkmark"></span>
                        </div>
                        ${item}
                      </label>
                    </li>`;
                }).join('')}
              </ul>
            </div>
          `).join('')}
          ${topic.links.length ? `
            <div class="topic-links">
              ${topic.links.map(link => `
                <div class="topic-link-item">
                  <span class="link-icon">↗</span>
                  <a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderPractice() {
  const container = document.getElementById('practice-container');
  container.innerHTML = '';

  practiceData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'practice');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = `practice-card-${topic.id}`;

    const levelsHtml = ['easy','medium','hard'].map(level => {
      if (!topic.levels[level] || !topic.levels[level].length) return '';
      return `
        <div class="problem-level" data-level="${level}" id="${topic.id}-${level}">
          <ul class="problem-list">
            ${topic.levels[level].map((prob, i) => {
              const key = `practice-${topic.id}-${level}-${i}`;
              const done = isCompleted(key);
              return `
                <li class="problem-item ${done ? 'completed problem-completed' : ''}">
                  <div class="custom-checkbox">
                    <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleItem('${key}'); this.closest('.problem-item').classList.toggle('completed'); this.closest('.problem-item').classList.toggle('problem-completed');">
                    <span class="checkmark"></span>
                  </div>
                  <span class="problem-number">${i + 1}</span>
                  <span class="problem-name"><a href="${prob.url}" target="_blank" rel="noopener">${prob.name}</a></span>
                  <span class="platform-badge ${prob.platform.toLowerCase()}">${prob.platform}</span>
                  <span class="difficulty-badge ${level}">${level}</span>
                </li>`;
            }).join('')}
          </ul>
        </div>`;
    }).join('');

    card.innerHTML = `
      <div class="topic-header" onclick="toggleTopic(this)">
        <span class="topic-number">${topic.number}</span>
        <div class="topic-info">
          <div class="topic-name">${topic.title}</div>
          <div class="topic-meta">
            <span>${prog.completed}/${prog.total} solved</span>
            <span>${topic.goal ? topic.goal.substring(0, 60) + '…' : ''}</span>
          </div>
        </div>
        <div class="topic-progress-bar">
          <div class="topic-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="topic-progress-text">${pct}%</span>
        <span class="topic-chevron">▾</span>
      </div>
      <div class="topic-body">
        <div class="topic-content">
          <div class="difficulty-tabs">
            <button class="diff-tab active" data-diff="easy" onclick="switchDiffTab(this, '${topic.id}')">Easy</button>
            <button class="diff-tab" data-diff="medium" onclick="switchDiffTab(this, '${topic.id}')">Medium</button>
            <button class="diff-tab" data-diff="hard" onclick="switchDiffTab(this, '${topic.id}')">Hard</button>
          </div>
          ${levelsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);

    // Show only easy by default
    const levels = card.querySelectorAll('.problem-level');
    levels.forEach(l => {
      l.style.display = l.dataset.level === 'easy' ? 'block' : 'none';
    });
  });
}

function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  let html = '<div class="sidebar-section-label">Theory Roadmap</div>';

  roadmapData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'roadmap');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;
    html += `
      <a href="#roadmap-${topic.id}" class="sidebar-link" onclick="closeSidebar()">
        <span class="sidebar-link-number">${topic.number}</span>
        ${topic.title}
        <span class="sidebar-progress">${pct}%</span>
      </a>`;
  });

  html += '<div class="sidebar-section-label" style="margin-top:20px">Practice Sheet</div>';

  practiceData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'practice');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;
    html += `
      <a href="#practice-card-${topic.id}" class="sidebar-link" onclick="closeSidebar()">
        <span class="sidebar-link-number">${topic.number}</span>
        ${topic.title}
        <span class="sidebar-progress">${pct}%</span>
      </a>`;
  });

  if (typeof contestData !== 'undefined') {
    html += '<div class="sidebar-section-label" style="margin-top:20px">Weekly Contests</div>';
    contestData.forEach((contest, index) => {
      const state = loadContestState(contest.id);
      const label = state.completed ? `${state.quizScore}/20 Qs` : (state.startTime ? 'Active' : 'Locked');
      html += `
        <a href="#contest-card-${contest.id}" class="sidebar-link" onclick="closeSidebar()">
          <span class="sidebar-link-number">0${index + 1}</span>
          ${contest.title.split(':')[0]}
          <span class="sidebar-progress">${label}</span>
        </a>`;
    });
  }

  nav.innerHTML = html;
}

// ============================================================
// UI INTERACTIONS
// ============================================================
function toggleTopic(headerEl) {
  const card = headerEl.closest('.topic-card');
  card.classList.toggle('open');
}

function switchDiffTab(btn, topicId) {
  const card = btn.closest('.topic-content');
  card.querySelectorAll('.diff-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const level = btn.dataset.diff;
  card.querySelectorAll('.problem-level').forEach(l => {
    l.style.display = l.dataset.level === level ? 'block' : 'none';
  });
}

function switchMainTab(btn) {
  document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const target = btn.dataset.tab;
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === target);
  });
}

function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('active');
}

function updateAllProgress() {
  renderHeroStats();
  renderDashboardStats();
  renderSidebar();

  // Update individual topic cards
  roadmapData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'roadmap');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;
    const card = document.getElementById(`roadmap-${topic.id}`);
    if (card) {
      const fill = card.querySelector('.topic-progress-fill');
      const text = card.querySelector('.topic-progress-text');
      const meta = card.querySelector('.topic-meta span');
      if (fill) fill.style.width = `${pct}%`;
      if (text) text.textContent = `${pct}%`;
      if (meta) meta.textContent = `${prog.completed}/${prog.total} completed`;
    }
  });

  practiceData.forEach(topic => {
    const prog = getTopicProgress(topic.id, 'practice');
    const pct = prog.total ? Math.round((prog.completed / prog.total) * 100) : 0;
    const card = document.getElementById(`practice-card-${topic.id}`);
    if (card) {
      const fill = card.querySelector('.topic-progress-fill');
      const text = card.querySelector('.topic-progress-text');
      const meta = card.querySelector('.topic-meta span');
      if (fill) fill.style.width = `${pct}%`;
      if (text) text.textContent = `${pct}%`;
      if (meta) meta.textContent = `${prog.completed}/${prog.total} solved`;
    }
  });
  renderContests();
}

// Search
function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const activeTab = document.querySelector('.tab-panel.active');
  if (!activeTab) return;

  const cards = activeTab.querySelectorAll('.topic-card, .contest-card');
  cards.forEach(card => {
    if (!query) {
      card.style.display = '';
      return;
    }
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(query) ? '' : 'none';
  });
}

// Scroll reveal
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Top bar auto-hide on scroll
function initTopBarAutoHide() {
  let lastScroll = 0;
  const topBar = document.getElementById('top-bar');
  window.addEventListener('scroll', () => {
    const curr = window.scrollY;
    if (curr > 300) {
      topBar.classList.toggle('hidden', curr > lastScroll);
    } else {
      topBar.classList.remove('hidden');
    }
    lastScroll = curr;
  });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderRoadmap();
  renderPractice();
  renderHeroStats();
  renderDashboardStats();
  renderSidebar();
  renderContests();
  initScrollReveal();
  initTopBarAutoHide();

  // Search
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }

  // Resume running contest timer on page load/refresh
  resumeRunningContest();
});

// ============================================================
// CONTEST DATA (5 Contests, 20 Quiz Qs, 5 Coding Problems: 3E, 1M, 1H)
// ============================================================
const contestData = [
  {
    id: "contest-1",
    title: "Contest 1: Sorting & Arrays Easy",
    topics: "Sorting (Basic & Advanced) + Arrays Easy",
    schedule: [
      { day: "Sat", topic: "Bubble & Selection Sort" },
      { day: "Sun", topic: "Insertion & Merge Sort" },
      { day: "Mon", topic: "Quick Sort & STL Sort" },
      { day: "Tue", topic: "Arrays Easy Basics" },
      { day: "Wed", topic: "Rotations & Search" },
      { day: "Thu", topic: "Union & Subarray Sum" }
    ],
    codingProblems: [
      { name: "Sort Array By Parity", platform: "LeetCode", url: "https://leetcode.com/problems/sort-array-by-parity/", slug: "sort-array-by-parity", diff: "easy" },
      { name: "Squares of a Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/squares-of-a-sorted-array/", slug: "squares-of-a-sorted-array", diff: "easy" },
      { name: "Relative Sort Array", platform: "LeetCode", url: "https://leetcode.com/problems/relative-sort-array/", slug: "relative-sort-array", diff: "easy" },
      { name: "Two Sum", platform: "LeetCode", url: "https://leetcode.com/problems/two-sum/", slug: "two-sum", diff: "easy" },
      { name: "Move Zeroes", platform: "LeetCode", url: "https://leetcode.com/problems/move-zeroes/", slug: "move-zeroes", diff: "easy" },
      { name: "Sort Colors", platform: "LeetCode", url: "https://leetcode.com/problems/sort-colors/", slug: "sort-colors", diff: "medium" },
      { name: "Maximum Subarray", platform: "LeetCode", url: "https://leetcode.com/problems/maximum-subarray/", slug: "maximum-subarray", diff: "medium" },
      { name: "Majority Element", platform: "LeetCode", url: "https://leetcode.com/problems/majority-element/", slug: "majority-element", diff: "medium" },
      { name: "Reverse Pairs", platform: "LeetCode", url: "https://leetcode.com/problems/reverse-pairs/", slug: "reverse-pairs", diff: "hard" },
      { name: "First Missing Positive", platform: "LeetCode", url: "https://leetcode.com/problems/first-missing-positive/", slug: "first-missing-positive", diff: "hard" }
    ],
    quiz: [
      { q: "What is the worst-case time complexity of Selection Sort?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(1)"], a: 2 },
      { q: "Which of the following sorting algorithms is stable by default?", c: ["Quick Sort", "Selection Sort", "Insertion Sort", "Heap Sort"], a: 2 },
      { q: "What is the best-case time complexity of Bubble Sort when optimized with a swap flag?", c: ["O(N)", "O(N^2)", "O(1)", "O(N log N)"], a: 0 },
      { q: "Merge Sort uses which of the following algorithmic paradigms?", c: ["Greedy Method", "Divide and Conquer", "Dynamic Programming", "Backtracking"], a: 1 },
      { q: "What is the worst-case space complexity of standard Merge Sort on an array of size N?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 2 },
      { q: "In C++ STL, which sorting algorithm is used by std::sort?", c: ["Quick Sort", "Merge Sort", "IntroSort", "TimSort"], a: 2 },
      { q: "What is the average-case time complexity of Quick Sort?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(N^2 log N)"], a: 1 },
      { q: "In Quick Sort, what pivot selection leads to worst-case complexity for a sorted array?", c: ["First or Last element", "Median of three", "Random element", "Middle element"], a: 0 },
      { q: "Which sorting algorithm is non-comparison based?", c: ["Bubble Sort", "Insertion Sort", "Radix Sort", "Merge Sort"], a: 2 },
      { q: "What is the time complexity to insert an element at the end of a std::vector in C++ when it needs to reallocate?", c: ["O(1)", "O(log N)", "O(N)", "O(N^2)"], a: 2 },
      { q: "Which STL container is implemented as a doubly linked list?", c: ["std::vector", "std::list", "std::deque", "std::forward_list"], a: 1 },
      { q: "What is the amortized time complexity of push_back in std::vector?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 0 },
      { q: "If you left rotate an array of size N by D places where D > N, it is equivalent to rotating by:", c: ["D - N", "D / N", "D % N", "D * N"], a: 2 },
      { q: "What is the time complexity of searching an element in an unsorted array of size N?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 2 },
      { q: "What is the auxiliary space complexity of finding the union of two sorted arrays of sizes N and M without duplicates using pointers?", c: ["O(1)", "O(N + M)", "O(N)", "O(min(N, M))"], a: 0 },
      { q: "How many comparisons does Selection Sort make on an array of size N?", c: ["N", "N log N", "N * (N - 1) / 2", "N^2"], a: 2 },
      { q: "What is the main disadvantage of Bubble Sort?", c: ["High memory usage", "High number of swaps", "Not in-place", "Difficult to code"], a: 1 },
      { q: "Which sorting algorithm is adaptive (runs faster if array is partially sorted)?", c: ["Selection Sort", "Insertion Sort", "Merge Sort", "Quick Sort"], a: 1 },
      { q: "In C++, what does std::vector::reserve() do?", c: ["Allocates memory but doesn't change size", "Changes size and initializes elements", "Shrinks vector capacity", "Releases all memory"], a: 0 },
      { q: "What is the time complexity of std::stable_sort when extra memory is available?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(N log^2 N)"], a: 1 }
    ]
  },
  {
    id: "contest-2",
    title: "Contest 2: Arrays Medium & Hard",
    topics: "Arrays Medium & Arrays Hard",
    schedule: [
      { day: "Sat", topic: "2 Sum, Sort 012, Majority" },
      { day: "Sun", topic: "Kadane, Stock Buy/Sell" },
      { day: "Mon", topic: "Next Permutation, Leaders" },
      { day: "Tue", topic: "Matrix Zeroes, Spiral, Rotate" },
      { day: "Wed", topic: "Pascal, 3Sum, 4Sum" },
      { day: "Thu", topic: "Merge Intervals, Inversions" }
    ],
    codingProblems: [
      { name: "Contains Duplicate", platform: "LeetCode", url: "https://leetcode.com/problems/contains-duplicate/", slug: "contains-duplicate", diff: "easy" },
      { name: "Best Time to Buy and Sell Stock", platform: "LeetCode", url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", slug: "best-time-to-buy-and-sell-stock", diff: "easy" },
      { name: "Check If Array Is Sorted and Rotated", platform: "LeetCode", url: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/", slug: "check-if-array-is-sorted-and-rotated", diff: "easy" },
      { name: "Remove Duplicates from Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", slug: "remove-duplicates-from-sorted-array", diff: "easy" },
      { name: "Find Numbers with Even Number of Digits", platform: "LeetCode", url: "https://leetcode.com/problems/find-numbers-with-even-number-of-digits/", slug: "find-numbers-with-even-number-of-digits", diff: "easy" },
      { name: "Rotate Image", platform: "LeetCode", url: "https://leetcode.com/problems/rotate-image/", slug: "rotate-image", diff: "medium" },
      { name: "Spiral Matrix", platform: "LeetCode", url: "https://leetcode.com/problems/spiral-matrix/", slug: "spiral-matrix", diff: "medium" },
      { name: "Subarray Sum Equals K", platform: "LeetCode", url: "https://leetcode.com/problems/subarray-sum-equals-k/", slug: "subarray-sum-equals-k", diff: "medium" },
      { name: "Median of Two Sorted Arrays", platform: "LeetCode", url: "https://leetcode.com/problems/median-of-two-sorted-arrays/", slug: "median-of-two-sorted-arrays", diff: "hard" },
      { name: "Largest Rectangle in Histogram", platform: "LeetCode", url: "https://leetcode.com/problems/largest-rectangle-in-histogram/", slug: "largest-rectangle-in-histogram", diff: "hard" }
    ],
    quiz: [
      { q: "What is the main objective of Kadane's algorithm?", c: ["Find peak element", "Find max sum subarray", "Find duplicate number", "Find matrix median"], a: 1 },
      { q: "What is the time complexity of Kadane's algorithm?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 2 },
      { q: "In Dutch National Flag algorithm, how many pointers are used to sort 0s, 1s, and 2s?", c: ["2", "3", "4", "5"], a: 1 },
      { q: "What is the time complexity of the Dutch National Flag algorithm?", c: ["O(N log N)", "O(N^2)", "O(N)", "O(1)"], a: 2 },
      { q: "To find a pair in a sorted array with sum K in O(N) time, which technique is best?", c: ["Binary Search", "Two Pointer", "Kadane's", "Boyer-Moore"], a: 1 },
      { q: "What is the value of Pascal's Triangle at row R and column C (0-indexed)?", c: ["R! / (C! * (R-C)!)", "R * C", "2^R", "(R + C)!"], a: 0 },
      { q: "What is the time complexity to generate the first N rows of Pascal's Triangle?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(2^N)"], a: 2 },
      { q: "What is the time complexity of merging overlapping intervals if the input is sorted?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 2 },
      { q: "If you use the optimal two-pointer approach to merge two sorted arrays without extra space, what is the time complexity?", c: ["O(N * M)", "O((N+M) log(N+M))", "O(N + M)", "O(1)"], a: 1 },
      { q: "In Next Permutation, what is the first step?", c: ["Swap first and last elements", "Find longest non-increasing suffix from right", "Reverse the entire array", "Sort the array in descending order"], a: 1 },
      { q: "What is the worst-case time complexity to find the majority element (> N/2) using Boyer-Moore Voting algorithm?", c: ["O(1)", "O(log N)", "O(N)", "O(N log N)"], a: 2 },
      { q: "What is the auxiliary space complexity of the Boyer-Moore Voting algorithm?", c: ["O(1)", "O(N)", "O(log N)", "O(N^2)"], a: 0 },
      { q: "What is the time complexity to find the longest consecutive sequence in an array using a HashSet?", c: ["O(N log N)", "O(N^2)", "O(N)", "O(1)"], a: 2 },
      { q: "In 'Set Matrix Zeroes', what is the optimal auxiliary space complexity?", c: ["O(N * M)", "O(N + M)", "O(1)", "O(min(N, M))"], a: 2 },
      { q: "What is the time complexity of rotating an N x N matrix by 90 degrees in-place?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(N^3)"], a: 2 },
      { q: "What is the time complexity of finding the maximum product subarray of an array containing negative numbers?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(2^N)"], a: 0 },
      { q: "How many majority elements can exist in an array of size N that appear strictly more than N/3 times?", c: ["At most 1", "At most 2", "At most 3", "Unlimited"], a: 1 },
      { q: "What is the time complexity of counting inversions in an array using Merge Sort?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(N log^2 N)"], a: 1 },
      { q: "What is the space complexity of counting inversions in an array using Merge Sort?", c: ["O(1)", "O(log N)", "O(N)", "O(N^2)"], a: 2 },
      { q: "In the next permutation algorithm, after finding the pivot index 'i' from the right, what do we swap it with?", c: ["First element from left", "Last element of array", "Smallest element to the right of 'i' that is greater than 'i'", "Largest element of array"], a: 2 }
    ]
  },
  {
    id: "contest-3",
    title: "Contest 3: Binary Search & Strings",
    topics: "Binary Search & Strings",
    schedule: [
      { day: "Sat", topic: "BS on 1D Arrays (Bounds, Search)" },
      { day: "Sun", topic: "BS on Answer (Koko, Packages)" },
      { day: "Mon", topic: "BS on 2D Arrays & Matrix Median" },
      { day: "Tue", topic: "Basic Strings (Anagram, Palindrome)" },
      { day: "Wed", topic: "Medium Strings (Substrings, Group Anagrams)" },
      { day: "Thu", topic: "Advanced Patterns & String Review" }
    ],
    codingProblems: [
      { name: "Binary Search", platform: "LeetCode", url: "https://leetcode.com/problems/binary-search/", slug: "binary-search", diff: "easy" },
      { name: "Search Insert Position", platform: "LeetCode", url: "https://leetcode.com/problems/search-insert-position/", slug: "search-insert-position", diff: "easy" },
      { name: "Valid Anagram", platform: "LeetCode", url: "https://leetcode.com/problems/valid-anagram/", slug: "valid-anagram", diff: "easy" },
      { name: "Valid Palindrome", platform: "LeetCode", url: "https://leetcode.com/problems/valid-palindrome/", slug: "valid-palindrome", diff: "easy" },
      { name: "Longest Common Prefix", platform: "LeetCode", url: "https://leetcode.com/problems/longest-common-prefix/", slug: "longest-common-prefix", diff: "easy" },
      { name: "Search in Rotated Sorted Array", platform: "LeetCode", url: "https://leetcode.com/problems/search-in-rotated-sorted-array/", slug: "search-in-rotated-sorted-array", diff: "medium" },
      { name: "Find Peak Element", platform: "LeetCode", url: "https://leetcode.com/problems/find-peak-element/", slug: "find-peak-element", diff: "medium" },
      { name: "Longest Substring Without Repeating Characters", platform: "LeetCode", url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", slug: "longest-substring-without-repeating-characters", diff: "medium" },
      { name: "Split Array Largest Sum", platform: "LeetCode", url: "https://leetcode.com/problems/split-array-largest-sum/", slug: "split-array-largest-sum", diff: "hard" },
      { name: "Minimum Window Substring", platform: "LeetCode", url: "https://leetcode.com/problems/minimum-window-substring/", slug: "minimum-window-substring", diff: "hard" }
    ],
    quiz: [
      { q: "To prevent integer overflow during mid calculation in Binary Search, which of the following is preferred?", c: ["(low + high) / 2", "low + (high - low) / 2", "high - (high - low) / 2", "(low + high) >> 1"], a: 1 },
      { q: "What is the maximum number of comparisons in a Binary Search on a sorted array of size 1024?", c: ["1024", "512", "10", "11"], a: 3 },
      { q: "Can Binary Search be applied to a sorted singly linked list with O(log N) time complexity?", c: ["Yes, if we use fast/slow pointers", "No, because random access is O(1) in linked lists", "No, because accessing mid element takes O(N) time", "Yes, by using recursion"], a: 2 },
      { q: "In a rotated sorted array (e.g. [4, 5, 6, 7, 0, 1, 2]), which key property allows us to perform Binary Search?", c: ["The entire array is always sorted", "At least one half of the array divided by mid is always sorted", "Both halves are always rotated by same amount", "The pivot is always at the middle"], a: 1 },
      { q: "In Binary Search on Answer (e.g., Koko Eating Bananas), if the search space of speed is [1, 10^9], how many iterations will the binary search loop run in the worst case?", c: ["30", "10^9", "300", "20"], a: 0 },
      { q: "For the 'Book Allocation Problem' or 'Split Array Largest Sum', what is the search space [low, high]?", c: ["[1, max(array)]", "[max(array), sum(array)]", "[min(array), sum(array)]", "[1, sum(array)]"], a: 1 },
      { q: "What is the time complexity of the KMP (Knuth-Morris-Pratt) pattern matching algorithm for a text of length N and a pattern of length M?", c: ["O(N * M)", "O(N + M)", "O(N log M)", "O(M log N)"], a: 1 },
      { q: "Which of the following is the time complexity of checking if a string of length N is a palindrome using the optimal two-pointer approach?", c: ["O(1)", "O(log N)", "O(N)", "O(N^2)"], a: 2 },
      { q: "In C++, Java or JS, what is the worst-case time complexity of standard string concatenation inside a loop of size N (where strings are immutable)?", c: ["O(N)", "O(N log N)", "O(N^2)", "O(1)"], a: 2 },
      { q: "What is the auxiliary space complexity of verifying if two strings are valid anagrams using a frequency array of size 26?", c: ["O(1)", "O(N)", "O(N + M)", "O(log N)"], a: 0 },
      { q: "In the optimal sliding window approach for 'Longest Substring Without Repeating Characters', how many times does each character get visited by the left and right pointers in the worst case?", c: ["At most 1 time", "At most 2 times", "At most N times", "O(N log N) times"], a: 1 },
      { q: "What does the 'Lower Bound' of a value X in a sorted array return?", c: ["The first index where element < X", "The first index where element >= X", "The last index where element <= X", "The index of X or -1 if not found"], a: 1 },
      { q: "What does the 'Upper Bound' of a value X in a sorted array return?", c: ["The first index where element > X", "The first index where element >= X", "The last index where element < X", "The index of X or -1 if not found"], a: 0 },
      { q: "Which of the following is true about string literals in languages like Java and Python?", c: ["They are mutable and stored in stack", "They are immutable and stored in a String Pool in heap", "They are immutable and stored in CPU registers", "They can be modified using array index notation"], a: 1 },
      { q: "In a search space where the condition is monotonic (e.g. FFFFTTTT), binary search helps find:", c: ["Any random True value", "The transition point from False to True", "The number of False values only", "The middle element always"], a: 1 },
      { q: "In the 'Find Peak Element' problem on an unsorted array, we can use binary search because:", c: ["The array is implicitly sorted", "A peak is guaranteed to exist and we can always move towards a greater neighbor", "Peak finding only works on sorted arrays", "We can sort the array first"], a: 1 },
      { q: "What is the time complexity of searching a target in a sorted 2D matrix of size N x M where every row is sorted and the first element of each row is greater than the last element of the previous row?", c: ["O(N * M)", "O(N + M)", "O(log(N * M))", "O(N log M)"], a: 2 },
      { q: "What is the main drawback of standard Rabin-Karp pattern matching algorithm?", c: ["It uses O(N) auxiliary space", "Spurious hash collisions can degrade worst-case time complexity to O(N * M)", "It cannot handle string search", "It is only applicable to binary strings"], a: 1 },
      { q: "Which algorithm is commonly used to find the shortest palindromic prefix/suffix or in pattern matching with a linear time complexity?", c: ["Kadane's algorithm", "Dutch National Flag", "KMP Prefix Function (LPS array)", "Boyer-Moore Voting"], a: 2 },
      { q: "In C++, std::string::substr(pos, len) has a time complexity of:", c: ["O(1)", "O(len)", "O(pos)", "O(N)"], a: 1 }
    ]
  }
];

// ============================================================
// CONTEST ENGINE LOGIC
// ============================================================
let activeContestId = null;
let activeTimerInterval = null;
let activeQuizAnswers = []; // stores index of answers
let activeQuizIndex = 0;
let leetcodeUsername = 'saarthxkk';
let autoVerifyInterval = null;
let lastAutoVerifyTime = 0;
let isVerifying = false;

function loadContestState(contestId) {
  const progress = loadProgress();
  progress.contests = progress.contests || {};
  
  if (!progress.contests[contestId]) {
    progress.contests[contestId] = {
      completed: false,
      inProgress: false,
      quizScore: 0,
      quizAnswers: Array(20).fill(-1),
      codingSolved: Array(10).fill(false),
      startTime: null,
      endTime: null,
      leetcodeUsername: ''
    };
  }
  
  const state = progress.contests[contestId];
  if (state.codingSolved.length < 10) {
    const orig = state.codingSolved;
    state.codingSolved = Array(10).fill(false);
    for (let i = 0; i < orig.length; i++) {
      state.codingSolved[i] = orig[i] || false;
    }
  }
  return state;
}

function saveContestState(contestId, state) {
  const progress = loadProgress();
  progress.contests = progress.contests || {};
  progress.contests[contestId] = state;
  saveProgress(progress);
  updateAllProgress();
}

function getContestSyllabusStatus(contestId) {
  const progress = loadProgress();
  let total = 0;
  let completed = 0;

  if (contestId === 'contest-1') {
    // sorting (all subtopics) + arrays (Arrays Easy)
    roadmapData.forEach(topic => {
      if (topic.id === 'sorting') {
        topic.subtopics.forEach(sub => {
          sub.items.forEach((item, i) => {
            total++;
            const key = `roadmap-${topic.id}-${sub.name}-${i}`;
            if (progress[key]) completed++;
          });
        });
      } else if (topic.id === 'arrays') {
        topic.subtopics.forEach(sub => {
          if (sub.name === 'Arrays Easy') {
            sub.items.forEach((item, i) => {
              total++;
              const key = `roadmap-${topic.id}-${sub.name}-${i}`;
              if (progress[key]) completed++;
            });
          }
        });
      }
    });
  } else if (contestId === 'contest-2') {
    // arrays (Arrays Medium & Arrays Hard)
    roadmapData.forEach(topic => {
      if (topic.id === 'arrays') {
        topic.subtopics.forEach(sub => {
          if (sub.name === 'Arrays Medium' || sub.name === 'Arrays Hard') {
            sub.items.forEach((item, i) => {
              total++;
              const key = `roadmap-${topic.id}-${sub.name}-${i}`;
              if (progress[key]) completed++;
            });
          }
        });
      }
    });
  } else if (contestId === 'contest-3') {
    // binary-search (all subtopics) + strings (all subtopics)
    roadmapData.forEach(topic => {
      if (topic.id === 'binary-search' || topic.id === 'strings') {
        topic.subtopics.forEach(sub => {
          sub.items.forEach((item, i) => {
            total++;
            const key = `roadmap-${topic.id}-${sub.name}-${i}`;
            if (progress[key]) completed++;
          });
        });
      }
    });
  }

  return { completed, total, isDone: total > 0 && completed === total };
}

function isContestLocked(contestId) {
  // Prerequisite 1: Previous contest must be completed
  const index = contestData.findIndex(c => c.id === contestId);
  if (index > 0) {
    const prevContest = contestData[index - 1];
    const prevState = loadContestState(prevContest.id);
    if (!prevState.completed) return { reason: 'previous_locked', prevTitle: prevContest.title };
  }

  // Prerequisite 2: Syllabus must be completed
  const syllabus = getContestSyllabusStatus(contestId);
  if (!syllabus.isDone) {
    return { reason: 'syllabus_locked', completed: syllabus.completed, total: syllabus.total };
  }

  return null; // Not locked
}

function renderContests() {
  const container = document.getElementById('contests-container');
  if (!container) return;
  container.innerHTML = '';

  contestData.forEach((contest, index) => {
    const state = loadContestState(contest.id);
    const lockInfo = isContestLocked(contest.id);
    const locked = !!lockInfo;

    const card = document.createElement('div');
    card.className = `contest-card ${locked ? 'locked' : ''}`;
    card.id = `contest-card-${contest.id}`;

    let badgeHtml = '';
    let lockNotice = '';
    if (locked) {
      if (lockInfo.reason === 'previous_locked') {
        badgeHtml = `<span class="contest-badge locked-badge" style="background: rgba(239, 68, 68, 0.15); border-color: var(--accent-red); color: var(--accent-red);">🔒 Lock: Finish ${lockInfo.prevTitle}</span>`;
        lockNotice = `<p style="font-size: 0.8rem; color: var(--accent-red); margin-top: 10px; font-style: italic; margin-bottom: 15px;">⚠️ Complete the previous weekly assessment for <strong>${lockInfo.prevTitle}</strong> to unlock this.</p>`;
      } else {
        badgeHtml = `<span class="contest-badge locked-badge" style="background: rgba(251, 191, 36, 0.15); border-color: var(--accent-gold); color: var(--accent-gold);">🔒 Syllabus: ${lockInfo.completed}/${lockInfo.total} Done</span>`;
        lockNotice = `<p style="font-size: 0.8rem; color: var(--accent-gold); margin-top: 10px; font-style: italic; margin-bottom: 15px;">⚠️ Complete all syllabus items under the <strong>Theory Roadmap</strong> tab for this week (${lockInfo.completed}/${lockInfo.total} completed) to unlock this.</p>`;
      }
    } else if (state.completed) {
      badgeHtml = `<span class="contest-badge completed">✓ Score: ${state.quizScore}/20 | Coding: ${state.codingSolved.filter(Boolean).length}/10</span>`;
    } else if (state.startTime) {
      badgeHtml = `<span class="contest-badge in-progress">⚡ In Progress</span>`;
    } else {
      badgeHtml = `<span class="contest-badge" style="background: rgba(52, 211, 153, 0.15); border-color: var(--accent-green); color: var(--accent-green);">⏳ Ready</span>`;
    }

    card.innerHTML = `
      <div class="contest-card-header">
        <span class="section-eyebrow">WEEK 0${index + 1} CONTEST</span>
        ${badgeHtml}
      </div>
      <h3 class="contest-title">${contest.title}</h3>
      <p class="section-desc" style="margin-bottom: var(--space-md);"><strong>Coverage:</strong> ${contest.topics}</p>
      
      <!-- Collapsible Syllabus & Problems list -->
      <div class="contest-syllabus-dropdown" style="margin-top: 15px; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 12px; margin-bottom: 15px;">
        <details style="cursor: pointer;">
          <summary style="font-family: var(--font-display); font-size: 0.75rem; color: var(--accent-gold); letter-spacing: 0.5px; outline: none; margin-bottom: 8px;">
            📚 View Contest Syllabus & Schedule
          </summary>
          <div style="padding: 8px 0 0 0; display: flex; flex-direction: column; gap: 8px; cursor: default;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; background: rgba(255, 255, 255, 0.01); padding: 10px; border-radius: var(--radius-sm); border: 1px solid rgba(255, 255, 255, 0.03);">
              ${contest.schedule.map(s => `
                <div style="font-size: 0.78rem; display: flex; flex-direction: column; gap: 2px;">
                  <span style="color: var(--accent-violet); font-weight: 600; font-size: 0.65rem; text-transform: uppercase;">${s.day}</span>
                  <span style="color: var(--text-primary);">${s.topic}</span>
                </div>
              `).join('')}
            </div>
            
            <div style="font-size: 0.78rem; color: var(--text-secondary); display: flex; flex-direction: column; gap: 4px; margin-top: 4px;">
              <span style="font-family: var(--font-display); font-size: 0.68rem; letter-spacing: 0.5px; text-transform: uppercase; color: var(--text-tertiary);">Coding Syllabus (${contest.codingProblems.length} Problems):</span>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${contest.codingProblems.map(p => `
                  <span class="platform-badge ${p.platform.toLowerCase()}" style="font-size: 0.65rem; padding: 2px 6px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 4px; display: inline-flex; align-items: center; gap: 4px;">
                    ${p.name} <span class="difficulty-badge ${p.diff.toLowerCase()}" style="font-size: 0.55rem; padding: 0 4px; border-radius: 2px;">${p.diff}</span>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </details>
      </div>

      ${lockNotice}

      <div style="display: flex; gap: var(--space-md);">
        <button class="start-contest-btn" ${locked ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''} onclick="handleContestClick('${contest.id}')">
          ${state.completed ? 'Review Results' : (state.startTime ? 'Resume Contest' : 'Enter Arena')}
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

function handleContestClick(contestId) {
  const state = loadContestState(contestId);
  if (state.completed) {
    reviewContest(contestId);
  } else {
    enterContestArena(contestId);
  }
}

// Fullscreen API Utilities
function requestFullscreenMode() {
  const elem = document.documentElement;
  try {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } catch (err) {
    console.warn("Fullscreen request rejected:", err);
  }
}

function exitFullscreenMode() {
  try {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } catch (err) {
    console.warn("Fullscreen exit failed:", err);
  }
}

// Bind Fullscreen Exit Warnings
document.addEventListener('fullscreenchange', handleFullscreenChange);
document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
document.addEventListener('mozfullscreenchange', handleFullscreenChange);
document.addEventListener('MSFullscreenChange', handleFullscreenChange);

function handleFullscreenChange() {
  const banner = document.getElementById('fullscreen-warning-banner');
  if (!banner) return;
  
  if (activeContestId) {
    const state = loadContestState(activeContestId);
    const isQuizDone = state && state.startTime && (state.quizCompleted || state.quizScore > 0 || (state.quizAnswers && state.quizAnswers.every(ans => ans !== -1)));
    
    // We only enforce fullscreen if the contest has started and the quiz is not completed yet
    const enforceFullscreen = state.startTime && !isQuizDone;
    
    if (enforceFullscreen) {
      const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
      banner.classList.toggle('active', !isFullscreen);
    } else {
      banner.classList.remove('active');
    }
  } else {
    banner.classList.remove('active');
  }
}

function enterContestArena(contestId) {
  activeContestId = contestId;
  const contest = contestData.find(c => c.id === contestId);
  const state = loadContestState(contestId);

  document.getElementById('arena-overlay-title').textContent = contest.title;
  document.getElementById('arena-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  leetcodeUsername = state.leetcodeUsername || leetcodeUsername || 'saarthxkk';

  if (!state.startTime) {
    renderInstructionsPage();
  } else {
    // Start timer loop
    if (activeTimerInterval) clearInterval(activeTimerInterval);
    tickContestTimer();
    activeTimerInterval = setInterval(tickContestTimer, 1000);

    const isQuizDone = state.quizCompleted || state.quizAnswers.every(ans => ans !== -1) || state.quizScore > 0;
    if (isQuizDone) {
      renderCodingRound();
    } else {
      activeQuizAnswers = [...state.quizAnswers];
      renderQuizQuestion(0);
    }
  }
}

function renderInstructionsPage() {
  const container = document.getElementById('arena-step-content');
  const state = loadContestState(activeContestId);
  const contest = contestData.find(c => c.id === activeContestId);
  
  container.className = 'quiz-step-container';
  container.innerHTML = `
    <div class="instructions-card">
      <h3 class="contest-title" style="font-size: 1.5rem; text-align: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 15px; margin-bottom: 10px;">${contest.title}</h3>
      <p class="section-desc" style="line-height: 1.7; text-align: center;">Welcome to the Friday assessment. Please read the guidelines carefully before starting.</p>
      
      <!-- Syllabus Details Box -->
      <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: var(--radius-sm); padding: 15px; margin-bottom: 20px;">
        <h4 style="font-family: var(--font-display); font-size: 0.8rem; letter-spacing: 1px; text-transform: uppercase; color: var(--accent-gold); margin-bottom: 8px;">
          📖 Contest Syllabus & Preparation:
        </h4>
        <p style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 10px;">
          <strong>Coverage:</strong> ${contest.topics}
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 10px;">
          ${contest.schedule.map(s => `
            <div style="font-size: 0.76rem; color: var(--text-secondary);">
              <strong style="color: var(--accent-violet); font-size: 0.65rem; text-transform: uppercase; display: block;">${s.day}</strong>
              ${s.topic}
            </div>
          `).join('')}
        </div>
      </div>

      <ol class="instructions-rule-list">
        <li><strong>Duration:</strong> 2 hours strictly. The timer starts immediately and cannot be paused.</li>
        <li><strong>Phase 1: Quiz (30 Mins Recommended):</strong> 20 conceptual multiple-choice questions testing your weekly study syllabus.</li>
        <li><strong>Phase 2: Coding Round (90 Mins Recommended):</strong> 10 coding problems (5 Easy, 3 Medium, 2 Hard) selected from LeetCode.</li>
        <li><strong>Fullscreen Lock:</strong> The assessment runs in **Fullscreen Mode**. Exiting fullscreen during the contest will trigger rule violation warnings.</li>
        <li><strong>Auto LeetCode Verification:</strong> Enter your LeetCode username below. We will connect to LeetCode to automatically verify your successful submissions.</li>
      </ol>
 
      <div class="username-input-group" style="margin-top: 20px;">
        <label for="contest-username-input" style="font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 1.5px; text-transform: uppercase; color: var(--accent-gold);">LeetCode Username (Optional)</label>
        <input type="text" id="contest-username-input" class="username-input" placeholder="e.g. saarthxkk" value="${leetcodeUsername}" />
      </div>
 
      <div style="text-align: center; margin-top: 20px;">
        <button class="start-contest-btn" style="align-self: center; border-color: var(--accent-gold); color: var(--accent-gold); padding: 12px 30px;" onclick="startContestActiveQuiz()">
          Agree & Start Contest (Go Fullscreen)
        </button>
      </div>
    </div>
  `;
}
 
function startContestActiveQuiz() {
  const usernameInput = document.getElementById('contest-username-input');
  if (usernameInput) {
    leetcodeUsername = usernameInput.value.trim();
  }
 
  const state = loadContestState(activeContestId);
  state.startTime = Date.now();
  state.inProgress = true;
  state.leetcodeUsername = leetcodeUsername;
  state.codingSolved = Array(10).fill(false);
  state.quizAnswers = Array(20).fill(-1);
  saveContestState(activeContestId, state);
 
  // Enter Fullscreen
  requestFullscreenMode();
 
  // Initialize timer
  if (activeTimerInterval) clearInterval(activeTimerInterval);
  tickContestTimer();
  activeTimerInterval = setInterval(tickContestTimer, 1000);
 
  // Load Quiz Phase
  activeQuizAnswers = Array(20).fill(-1);
  renderQuizQuestion(0);
}

function tickContestTimer() {
  if (!activeContestId) return;
  const state = loadContestState(activeContestId);
  const elapsedSeconds = Math.floor((Date.now() - state.startTime) / 1000);
  const totalSeconds = 2 * 60 * 60; // 2 hours
  const remainingSeconds = totalSeconds - elapsedSeconds;

  const timerEl = document.getElementById('arena-timer-display');
  if (remainingSeconds <= 0) {
    clearInterval(activeTimerInterval);
    timerEl.textContent = "00:00:00";
    alert('Time has expired! Submitting your contest.');
    autoSubmitContest(activeContestId);
  } else {
    const hrs = Math.floor(remainingSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((remainingSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (remainingSeconds % 60).toString().padStart(2, '0');
    timerEl.textContent = `${hrs}:${mins}:${secs}`;
  }
}

function resumeRunningContest() {
  contestData.forEach(contest => {
    const state = loadContestState(contest.id);
    if (state.startTime && !state.completed) {
      const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
      if (elapsed < 2 * 60 * 60) {
        // Resume
        enterContestArena(contest.id);
      } else {
        // Auto-complete expired
        autoSubmitContest(contest.id);
      }
    }
  });
}

function renderQuizQuestion(qIndex) {
  activeQuizIndex = qIndex;
  const contest = contestData.find(c => c.id === activeContestId);
  const question = contest.quiz[qIndex];
  const container = document.getElementById('arena-step-content');

  // Load selection
  const selectedIndex = activeQuizAnswers[qIndex];

  container.className = 'quiz-step-container';
  container.innerHTML = `
    <div class="quiz-question-box">
      <span class="arena-eyebrow" style="margin-bottom: 5px;">Question ${qIndex + 1} of 20</span>
      <div class="quiz-question-text">${question.q}</div>
      <div class="quiz-options-grid">
        ${question.c.map((choice, i) => `
          <div class="quiz-option ${selectedIndex === i ? 'selected' : ''}" onclick="selectQuizOption(${i})">
            <div class="quiz-option-radio"></div>
            <span class="quiz-option-text">${choice}</span>
          </div>
        `).join('')}
      </div>
    </div>
    
    <div class="quiz-nav-row">
      <button class="quiz-nav-btn" ${qIndex === 0 ? 'disabled' : ''} onclick="renderQuizQuestion(${qIndex - 1})">Previous</button>
      <span class="quiz-progress-text">${qIndex + 1} / 20</span>
      ${qIndex === 19 ? 
        `<button class="quiz-nav-btn" style="border-color: var(--accent-gold); color: var(--accent-gold);" onclick="submitQuizPhase()">Submit Quiz & Unlocks Coding</button>` : 
        `<button class="quiz-nav-btn" onclick="renderQuizQuestion(${qIndex + 1})">Next</button>`
      }
    </div>
  `;
}

function selectQuizOption(optionIndex) {
  activeQuizAnswers[activeQuizIndex] = optionIndex;
  
  // Save intermediate answer to local storage
  const state = loadContestState(activeContestId);
  state.quizAnswers = [...activeQuizAnswers];
  saveContestState(activeContestId, state);

  // Update classes
  document.querySelectorAll('.quiz-option').forEach((opt, i) => {
    opt.classList.toggle('selected', i === optionIndex);
  });
}

function submitQuizPhase() {
  // Confirm unselected
  const unanswered = activeQuizAnswers.filter(ans => ans === -1).length;
  if (unanswered > 0) {
    if (!confirm(`You have ${unanswered} unanswered questions. Are you sure you want to submit the quiz?`)) {
      return;
    }
  }

  const contest = contestData.find(c => c.id === activeContestId);
  let score = 0;
  activeQuizAnswers.forEach((ans, i) => {
    if (ans === contest.quiz[i].a) score++;
  });

  const state = loadContestState(activeContestId);
  state.quizScore = score;
  state.quizAnswers = [...activeQuizAnswers];
  state.quizCompleted = true;
  saveContestState(activeContestId, state);

  // Transition to coding round
  exitFullscreenMode();
  renderCodingRound();
}

function renderCodingRound() {
  const contest = contestData.find(c => c.id === activeContestId);
  const state = loadContestState(activeContestId);
  const container = document.getElementById('arena-step-content');

  container.className = 'coding-step-container';
  container.innerHTML = `
    <!-- Verification Progress Bar -->
    <div id="verify-progress-bar" class="verify-progress-bar">
      <div id="verify-progress-fill" class="verify-progress-fill"></div>
    </div>

    <div class="coding-intro-card">
      <div class="coding-intro-title">Phase 2: Coding Challenge</div>
      <p class="coding-intro-text">Solve the problems below. Click titles to open them on LeetCode. Submissions are <strong>auto-detected</strong> every 30s, or use the buttons to verify.</p>
      <div style="margin-top: 15px; display: flex; align-items: center; gap: var(--space-md); flex-wrap: wrap;">
        <span style="font-size: 0.9rem; color: var(--text-secondary);">LeetCode Username:</span>
        <input type="text" id="coding-username-input" class="username-input" style="max-width: 200px; margin: 0; padding: 6px 12px;" placeholder="e.g. saarthxkk" value="${leetcodeUsername}" oninput="updateCodingUsername(this.value)" />
      </div>
      <div id="auto-verify-status" class="auto-verify-status" style="display: flex; align-items: center; justify-content: space-between; gap: var(--space-md); flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="auto-verify-dot ${leetcodeUsername ? 'active' : ''}"></span>
          <span class="auto-verify-label">${leetcodeUsername ? 'Auto-check active — polling every 30s' : 'Enter username to enable auto-check'}</span>
        </div>
        <button id="check-all-btn" class="check-all-btn" onclick="checkAllSubmissions()">
          <span class="check-all-icon">🔄</span>
          <span class="check-all-text">Check All Now</span>
        </button>
      </div>
    </div>

    <ul class="problem-list" style="margin: 20px 0;">
      ${contest.codingProblems.map((prob, i) => {
        const checked = state.codingSolved[i];
        return `
          <li class="problem-item ${checked ? 'completed problem-completed' : ''}" style="padding: var(--space-md); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 10px; display: flex; align-items: center; gap: var(--space-md); flex-wrap: wrap;">
            <div class="custom-checkbox">
              <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggleContestCoding(${i}, this)">
              <span class="checkmark"></span>
            </div>
            <span class="problem-number">0${i + 1}</span>
            <span class="problem-name" style="font-size: 1rem; flex-grow: 1; min-width: 150px;"><a href="${prob.url}" target="_blank" rel="noopener">${prob.name}</a></span>
            <span class="platform-badge ${prob.platform.toLowerCase()}">${prob.platform}</span>
            <span class="difficulty-badge ${prob.diff.toLowerCase()}">${prob.diff}</span>
            
            <button id="verify-btn-${i}" class="verify-btn ${checked ? 'verified' : ''}" onclick="verifyLeetCodeSubmission(${i}, '${prob.slug}')">
              <span class="verify-btn-spinner"></span>
              <span class="verify-btn-text">${checked ? '✓ Verified' : 'Verify'}</span>
            </button>
          </li>
        `;
      }).join('')}
    </ul>

    <div style="text-align: center; margin-top: var(--space-xl);">
      <button class="start-contest-btn" style="align-self: center; border-color: var(--accent-gold); color: var(--accent-gold);" onclick="submitContestComplete()">Submit and Finish Contest</button>
    </div>
  `;

  // Start automatic polling
  startAutoVerification();
}

function updateCodingUsername(val) {
  leetcodeUsername = val.trim();
  const state = loadContestState(activeContestId);
  state.leetcodeUsername = leetcodeUsername;
  saveContestState(activeContestId, state);

  // Update auto-verify status indicator
  const statusLabel = document.querySelector('.auto-verify-label');
  const statusDot = document.querySelector('.auto-verify-dot');
  const checkAllBtn = document.getElementById('check-all-btn');
  if (statusLabel && statusDot) {
    if (leetcodeUsername) {
      statusLabel.textContent = 'Auto-check active — polling every 30s';
      statusDot.classList.add('active');
      if (checkAllBtn) checkAllBtn.style.display = 'flex';
      startAutoVerification();
    } else {
      statusLabel.textContent = 'Enter username to enable auto-check';
      statusDot.classList.remove('active');
      if (checkAllBtn) checkAllBtn.style.display = 'none';
      stopAutoVerification();
    }
  }
}

// ── Auto-Verification Polling Engine ──────────────────────────
function startAutoVerification() {
  stopAutoVerification(); // Clear any existing interval first

  if (!leetcodeUsername || !activeContestId) return;

  const statusDot = document.querySelector('.auto-verify-dot');
  if (statusDot) statusDot.classList.add('active');

  // Run an immediate check then poll every 30 seconds
  runAutoVerifyCycle();
  autoVerifyInterval = setInterval(runAutoVerifyCycle, 30000);
}

function stopAutoVerification() {
  if (autoVerifyInterval) {
    clearInterval(autoVerifyInterval);
    autoVerifyInterval = null;
  }
  const statusDot = document.querySelector('.auto-verify-dot');
  if (statusDot) statusDot.classList.remove('active');
}

async function runAutoVerifyCycle() {
  if (!leetcodeUsername || !activeContestId) {
    stopAutoVerification();
    return;
  }

  const contest = contestData.find(c => c.id === activeContestId);
  if (!contest) return;

  const state = loadContestState(activeContestId);

  // Find unsolved problems
  const unsolvedIndices = [];
  contest.codingProblems.forEach((prob, i) => {
    if (!state.codingSolved[i]) unsolvedIndices.push(i);
  });

  // If all solved, stop polling
  if (unsolvedIndices.length === 0) {
    stopAutoVerification();
    const statusLabel = document.querySelector('.auto-verify-label');
    if (statusLabel) statusLabel.textContent = '✓ All problems verified!';
    return;
  }

  // Flash the status indicator
  const statusLabel = document.querySelector('.auto-verify-label');
  const statusDot = document.querySelector('.auto-verify-dot');
  if (statusDot) statusDot.classList.add('checking');
  if (statusLabel) statusLabel.textContent = 'Checking LeetCode submissions…';

  try {
    const url = `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/acSubmission?limit=50`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API ${response.status}`);
    const data = await response.json();

    const submissions = Array.isArray(data) ? data : (data && Array.isArray(data.submission) ? data.submission : []);

    let newSolvedCount = 0;

    unsolvedIndices.forEach(i => {
      const prob = contest.codingProblems[i];
      const isSolved = submissions.some(sub => {
        const matchSlug = sub.titleSlug && sub.titleSlug.toLowerCase() === prob.slug.toLowerCase();
        const matchTitle = sub.title && sub.title.toLowerCase().replace(/[^a-z0-9]/g, '') === prob.slug.replace(/[^a-z0-9]/g, '').toLowerCase();
        return matchSlug || matchTitle;
      });

      if (isSolved) {
        newSolvedCount++;
        state.codingSolved[i] = true;
        saveContestState(activeContestId, state);

        // Update the UI for this problem
        const btn = document.getElementById(`verify-btn-${i}`);
        if (btn) {
          btn.classList.remove('checking');
          btn.classList.add('verified');
          const btnText = btn.querySelector('.verify-btn-text');
          if (btnText) btnText.textContent = '✓ Verified';
        }

        const checkbox = document.querySelector(`.problem-list li:nth-child(${i + 1}) input[type="checkbox"]`);
        if (checkbox) {
          checkbox.checked = true;
          const li = checkbox.closest('.problem-item');
          if (li) {
            li.classList.add('completed', 'problem-completed');
          }
        }
      }
    });

    lastAutoVerifyTime = Date.now();

    if (newSolvedCount > 0) {
      // Show a subtle toast notification
      showAutoVerifyToast(`${newSolvedCount} problem${newSolvedCount > 1 ? 's' : ''} auto-verified! 🎉`);
    }

    // Re-check if all solved after this cycle
    const stateAfter = loadContestState(activeContestId);
    const allSolved = contest.codingProblems.every((_, i) => stateAfter.codingSolved[i]);
    if (allSolved) {
      stopAutoVerification();
      if (statusLabel) statusLabel.textContent = '✓ All problems verified!';
    } else {
      if (statusDot) statusDot.classList.remove('checking');
      if (statusLabel) statusLabel.textContent = `Auto-check active — last checked ${new Date().toLocaleTimeString()}`;
    }
  } catch (err) {
    console.warn('Auto-verify cycle error:', err);
    if (statusDot) statusDot.classList.remove('checking');
    if (statusLabel) statusLabel.textContent = 'Auto-check active — retrying in 30s';
  }
}

function showVerifyProgress(active) {
  const bar = document.getElementById('verify-progress-bar');
  const fill = document.getElementById('verify-progress-fill');
  if (!bar || !fill) return;
  if (active) {
    bar.classList.add('active');
    fill.style.width = '0%';
    requestAnimationFrame(() => { fill.style.width = '70%'; });
  } else {
    fill.style.width = '100%';
    setTimeout(() => {
      bar.classList.remove('active');
      fill.style.width = '0%';
    }, 400);
  }
}

async function checkAllSubmissions() {
  console.log('[CheckAll] Triggered. Username:', leetcodeUsername, 'Contest:', activeContestId);
  if (!leetcodeUsername || !activeContestId) {
    alert("Please enter your LeetCode username first.");
    return;
  }

  if (isVerifying) {
    console.log('[CheckAll] Already verifying, skipping.');
    return;
  }
  isVerifying = true;

  const btn = document.getElementById('check-all-btn');
  const btnText = btn ? btn.querySelector('.check-all-text') : null;
  const btnIcon = btn ? btn.querySelector('.check-all-icon') : null;
  if (btn) btn.classList.add('loading');
  if (btnText) btnText.textContent = 'Checking…';
  if (btnIcon) btnIcon.style.animation = 'spin 0.8s linear infinite';

  showVerifyProgress(true);

  const statusLabel = document.querySelector('.auto-verify-label');
  const statusDot = document.querySelector('.auto-verify-dot');
  if (statusDot) statusDot.classList.add('checking');
  if (statusLabel) statusLabel.textContent = 'Fetching submissions from LeetCode…';

  const contest = contestData.find(c => c.id === activeContestId);
  const state = loadContestState(activeContestId);
  const unsolvedIndices = [];
  
  contest.codingProblems.forEach((prob, i) => {
    if (!state.codingSolved[i]) {
      unsolvedIndices.push(i);
      const probBtn = document.getElementById(`verify-btn-${i}`);
      if (probBtn && !probBtn.classList.contains('verified')) {
        probBtn.classList.add('checking');
        const t = probBtn.querySelector('.verify-btn-text');
        if (t) t.textContent = 'Checking…';
      }
    }
  });

  if (unsolvedIndices.length === 0) {
    showVerifyProgress(false);
    showAutoVerifyToast('All problems already verified! ✅');
    isVerifying = false;
    if (btn) btn.classList.remove('loading');
    if (btnText) btnText.textContent = 'Check All Now';
    if (btnIcon) btnIcon.style.animation = '';
    return;
  }

  try {
    const url = `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/acSubmission?limit=50`;
    console.log('[CheckAll] Fetching:', url);
    const response = await fetch(url);
    console.log('[CheckAll] Response status:', response.status);
    if (!response.ok) throw new Error(`API returned status ${response.status}`);
    const data = await response.json();
    console.log('[CheckAll] Data keys:', Object.keys(data), 'Count:', data.count);

    const submissions = Array.isArray(data) ? data : (data && Array.isArray(data.submission) ? data.submission : []);
    console.log('[CheckAll] Submissions found:', submissions.length);

    let newlyVerified = 0;

    unsolvedIndices.forEach(i => {
      const prob = contest.codingProblems[i];
      const isSolved = submissions.some(sub => {
        const matchSlug = sub.titleSlug && sub.titleSlug.toLowerCase() === prob.slug.toLowerCase();
        const matchTitle = sub.title && sub.title.toLowerCase().replace(/[^a-z0-9]/g, '') === prob.slug.replace(/[^a-z0-9]/g, '').toLowerCase();
        return matchSlug || matchTitle;
      });

      console.log(`[CheckAll] Problem "${prob.slug}" => ${isSolved ? 'SOLVED ✓' : 'not found'}`);

      const probBtn = document.getElementById(`verify-btn-${i}`);
      const checkbox = document.querySelector(`.problem-list li:nth-child(${i + 1}) input[type="checkbox"]`);

      if (isSolved) {
        newlyVerified++;
        state.codingSolved[i] = true;
        if (probBtn) {
          probBtn.classList.remove('checking');
          probBtn.classList.add('verified');
          const t = probBtn.querySelector('.verify-btn-text');
          if (t) t.textContent = '✓ Verified';
        }
        if (checkbox) {
          checkbox.checked = true;
          const li = checkbox.closest('.problem-item');
          if (li) li.classList.add('completed', 'problem-completed');
        }
      } else {
        if (probBtn) {
          probBtn.classList.remove('checking');
          const t = probBtn.querySelector('.verify-btn-text');
          if (t) t.textContent = 'Verify';
        }
      }
    });

    if (newlyVerified > 0) {
      saveContestState(activeContestId, state);
      showAutoVerifyToast(`${newlyVerified} problem${newlyVerified > 1 ? 's' : ''} verified! 🎉`);
    } else {
      showAutoVerifyToast(`No new submissions found for "${leetcodeUsername}". Solve a problem and try again.`);
    }

    const stateAfter = loadContestState(activeContestId);
    const allSolved = contest.codingProblems.every((_, i) => stateAfter.codingSolved[i]);
    if (allSolved) {
      stopAutoVerification();
      if (statusLabel) statusLabel.textContent = '✓ All problems verified!';
    } else {
      if (statusDot) statusDot.classList.remove('checking');
      if (statusLabel) statusLabel.textContent = `Last checked ${new Date().toLocaleTimeString()}`;
    }

  } catch (error) {
    console.error('[CheckAll] Error:', error);
    showAutoVerifyToast(`API error: ${error.message}. Try again.`);
    unsolvedIndices.forEach(i => {
      const probBtn = document.getElementById(`verify-btn-${i}`);
      if (probBtn) {
        probBtn.classList.remove('checking');
        const t = probBtn.querySelector('.verify-btn-text');
        if (t) t.textContent = 'Verify';
      }
    });
    if (statusDot) statusDot.classList.remove('checking');
    if (statusLabel) statusLabel.textContent = 'Check failed — try again';
  } finally {
    showVerifyProgress(false);
    isVerifying = false;
    if (btn) btn.classList.remove('loading');
    if (btnText) btnText.textContent = 'Check All Now';
    if (btnIcon) btnIcon.style.animation = '';
  }
}

function showAutoVerifyToast(message) {
  const existing = document.getElementById('auto-verify-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'auto-verify-toast';
  toast.className = 'auto-verify-toast';
  toast.innerHTML = `<span class="toast-icon">✓</span> ${message}`;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => toast.classList.add('visible'));

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

async function verifyLeetCodeSubmission(index, slug) {
  console.log(`[Verify] Problem #${index}: "${slug}", Username: "${leetcodeUsername}"`);
  if (!leetcodeUsername) {
    alert("Please enter your LeetCode username first to verify submissions.");
    return;
  }

  if (isVerifying) {
    console.log('[Verify] Already verifying, skipping.');
    return;
  }
  isVerifying = true;

  const btn = document.getElementById(`verify-btn-${index}`);
  if (!btn) {
    isVerifying = false;
    return;
  }
  if (btn.classList.contains('verified')) {
    isVerifying = false;
    return; // Already verified
  }

  btn.classList.add('checking');
  const btnText = btn.querySelector('.verify-btn-text');
  if (btnText) btnText.textContent = 'Checking…';

  showVerifyProgress(true);

  try {
    const url = `https://alfa-leetcode-api.onrender.com/${leetcodeUsername}/acSubmission?limit=50`;
    console.log('[Verify] Fetching:', url);
    const response = await fetch(url);
    console.log('[Verify] Response status:', response.status);
    if (!response.ok) throw new Error(`API returned status ${response.status}`);

    const data = await response.json();
    const submissions = Array.isArray(data) ? data : (data && Array.isArray(data.submission) ? data.submission : []);
    console.log(`[Verify] Got ${submissions.length} submissions`);
    
    const isSolved = submissions.some(sub => {
      const matchSlug = sub.titleSlug && sub.titleSlug.toLowerCase() === slug.toLowerCase();
      const matchTitle = sub.title && sub.title.toLowerCase().replace(/[^a-z0-9]/g, '') === slug.replace(/[^a-z0-9]/g, '').toLowerCase();
      return matchSlug || matchTitle;
    });

    console.log(`[Verify] "${slug}" => ${isSolved ? 'SOLVED ✓' : 'NOT FOUND'}`);

    if (isSolved) {
      const state = loadContestState(activeContestId);
      state.codingSolved[index] = true;
      saveContestState(activeContestId, state);

      btn.classList.remove('checking');
      btn.classList.add('verified');
      if (btnText) btnText.textContent = '✓ Verified';
      
      const checkbox = document.querySelector(`.problem-list li:nth-child(${index + 1}) input[type="checkbox"]`);
      if (checkbox) {
        checkbox.checked = true;
        const li = checkbox.closest('.problem-item');
        if (li) li.classList.add('completed', 'problem-completed');
      }
      showAutoVerifyToast(`"${slug}" verified on LeetCode! ✅`);
    } else {
      btn.classList.remove('checking');
      if (btnText) btnText.textContent = 'Verify';
      showAutoVerifyToast(`"${slug}" not found in your recent submissions. Solve it on LeetCode first.`);
    }
  } catch (error) {
    console.error('[Verify] Error:', error);
    btn.classList.remove('checking');
    if (btnText) btnText.textContent = 'Verify';
    showAutoVerifyToast(`Verification failed: ${error.message}`);
  } finally {
    showVerifyProgress(false);
    isVerifying = false;
  }
}

function toggleContestCoding(pIndex, checkbox) {
  const state = loadContestState(activeContestId);
  state.codingSolved[pIndex] = checkbox.checked;
  saveContestState(activeContestId, state);

  const li = checkbox.closest('.problem-item');
  li.classList.toggle('completed', checkbox.checked);
  li.classList.toggle('problem-completed', checkbox.checked);
}

function submitContestComplete() {
  if (confirm('Finish contest? Your results will be saved.')) {
    const state = loadContestState(activeContestId);
    state.completed = true;
    state.endTime = Date.now();
    saveContestState(activeContestId, state);

    // Stop timer & auto-verify
    clearInterval(activeTimerInterval);
    stopAutoVerification();
    activeContestId = null;

    closeContestArena();
    renderContests();
  }
}

function autoSubmitContest(contestId) {
  const state = loadContestState(contestId);
  
  // Calculate quiz score if not already done
  if (state.quizScore === 0 && state.quizAnswers.length > 0) {
    const contest = contestData.find(c => c.id === contestId);
    let score = 0;
    state.quizAnswers.forEach((ans, i) => {
      if (ans === contest.quiz[i].a) score++;
    });
    state.quizScore = score;
  }

  state.completed = true;
  state.endTime = Date.now();
  saveContestState(contestId, state);

  clearInterval(activeTimerInterval);
  stopAutoVerification();
  activeContestId = null;

  closeContestArena();
  renderContests();
}

function closeContestArena() {
  document.getElementById('arena-overlay').classList.remove('active');
  document.body.style.overflow = ''; // Unlock scroll
  if (activeTimerInterval) clearInterval(activeTimerInterval);
  stopAutoVerification();
  activeContestId = null;
  renderContests();
}

// Review Contest (Solutions Panel)
function reviewContest(contestId) {
  activeContestId = contestId;
  const contest = contestData.find(c => c.id === contestId);
  const state = loadContestState(contestId);

  document.getElementById('arena-overlay-title').textContent = contest.title + " (Results Review)";
  document.getElementById('arena-timer-display').textContent = "COMPLETED";
  document.getElementById('arena-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';

  const container = document.getElementById('arena-step-content');
  container.className = 'review-step-container';

  let html = `
    <div style="background: rgba(201, 168, 76, 0.05); border: 1px solid var(--accent-gold); border-radius: var(--radius-lg); padding: var(--space-xl); text-align: center; margin-bottom: var(--space-lg);">
      <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--accent-gold); margin-bottom: 5px;">Contest Summary</h3>
      <p style="font-size: 1rem; color: var(--text-secondary);">Quiz Score: <strong>${state.quizScore} / 20</strong> (${Math.round((state.quizScore/20)*100)}%)</p>
      <p style="font-size: 1rem; color: var(--text-secondary);">Coding Problems: <strong>${state.codingSolved.filter(Boolean).length} / 10</strong> Solved</p>
      <button class="reset-btn" style="margin-top: 15px;" onclick="resetContestProgress('${contestId}')">Retake Contest</button>
    </div>
    
    <div class="section-eyebrow">Coding Round Solutions</div>
    <ul class="problem-list" style="margin-bottom: var(--space-2xl);">
      ${contest.codingProblems.map((prob, i) => {
        const checked = state.codingSolved[i];
        return `
          <li class="problem-item ${checked ? 'completed problem-completed' : ''}" style="padding: var(--space-md); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); margin-bottom: 10px; display: flex; align-items: center; gap: var(--space-md); flex-wrap: wrap;">
            <span class="problem-number">0${i + 1}</span>
            <span class="problem-name" style="font-size: 1rem; flex-grow: 1; min-width: 150px;"><a href="${prob.url}" target="_blank" rel="noopener">${prob.name}</a></span>
            <span class="platform-badge ${prob.platform.toLowerCase()}">${prob.platform}</span>
            <span class="difficulty-badge ${prob.diff.toLowerCase()}">${prob.diff}</span>
            <span style="margin-left: auto; color: ${checked ? 'var(--accent-green)' : 'var(--accent-red)'}; font-family: var(--font-display); font-size: 0.75rem;">
              ${checked ? 'SOLVED' : 'UNSOLVED'}
            </span>
          </li>
        `;
      }).join('')}
    </ul>

    <div class="section-eyebrow">Quiz Answers Breakdown</div>
  `;

  contest.quiz.forEach((qItem, i) => {
    const userAns = state.quizAnswers[i];
    const correctAns = qItem.a;
    const isCorrect = userAns === correctAns;

    html += `
      <div class="review-quiz-item ${isCorrect ? 'correct' : 'wrong'}">
        <div class="review-question-text">${i + 1}. ${qItem.q}</div>
        <div class="review-options-list">
          ${qItem.c.map((choice, oIdx) => {
            let cls = '';
            if (oIdx === correctAns) cls = 'correct-answer';
            else if (oIdx === userAns) cls = 'user-selected';
            return `
              <div class="review-option-item ${cls}">
                ${choice} ${oIdx === correctAns ? ' (Correct)' : (oIdx === userAns ? ' (Your Answer)' : '')}
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  html += `
    <div style="text-align: center; margin-top: var(--space-xl);">
      <button class="quiz-nav-btn" onclick="closeContestArena()">Close Review</button>
    </div>
  `;

  container.innerHTML = html;
}

function resetContestProgress(contestId) {
  if (confirm('Are you sure you want to reset this contest? Your current score will be lost and you can retake the quiz & coding round.')) {
    const progress = loadProgress();
    if (progress.contests && progress.contests[contestId]) {
      delete progress.contests[contestId];
      saveProgress(progress);
      closeContestArena();
      renderContests();
    }
  }
}

