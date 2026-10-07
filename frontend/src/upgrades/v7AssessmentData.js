export const V7_QUESTIONS = [
  {
    id:1, module:"Python", difficulty:"Easy",
    question:"Which keyword is used to define a function in Python?",
    options:["function","def","fun","define"],
    answer:"def",
    explanation:"Python uses the def keyword to define a function."
  },
  {
    id:2, module:"Python", difficulty:"Medium",
    question:"What does return do inside a Python function?",
    options:[
      "Prints a value",
      "Stops the program",
      "Sends a value back to the caller",
      "Creates a variable"
    ],
    answer:"Sends a value back to the caller",
    explanation:"return sends the function result back to the calling code."
  },
  {
    id:3, module:"OOP", difficulty:"Easy",
    question:"What is an object?",
    options:[
      "A database",
      "An instance of a class",
      "A Python keyword",
      "A function only"
    ],
    answer:"An instance of a class",
    explanation:"An object is an instance created from a class."
  },
  {
    id:4, module:"SQL", difficulty:"Easy",
    question:"Which SQL command retrieves data?",
    options:["GET","SELECT","FETCHALL","READ"],
    answer:"SELECT",
    explanation:"SELECT is used to retrieve rows from a relational database."
  },
  {
    id:5, module:"SQL", difficulty:"Medium",
    question:"Which clause filters grouped results?",
    options:["WHERE","ORDER BY","HAVING","LIMIT"],
    answer:"HAVING",
    explanation:"HAVING filters groups after GROUP BY."
  },
  {
    id:6, module:"React", difficulty:"Easy",
    question:"What is JSX?",
    options:[
      "A database",
      "A syntax extension used by React",
      "A Python framework",
      "A CSS library"
    ],
    answer:"A syntax extension used by React",
    explanation:"JSX lets developers write HTML-like syntax inside JavaScript."
  },
  {
    id:7, module:"React", difficulty:"Medium",
    question:"Which hook is commonly used for local component state?",
    options:["useRoute","useState","useAPI","useComponent"],
    answer:"useState",
    explanation:"useState provides state management inside functional React components."
  },
  {
    id:8, module:"Django", difficulty:"Easy",
    question:"What is Django?",
    options:[
      "A database",
      "A Python web framework",
      "A JavaScript compiler",
      "A cloud provider"
    ],
    answer:"A Python web framework",
    explanation:"Django is a high-level Python web framework."
  },
  {
    id:9, module:"Django", difficulty:"Medium",
    question:"What is Django ORM used for?",
    options:[
      "CSS styling",
      "Database interaction using Python objects",
      "Video editing",
      "Network routing"
    ],
    answer:"Database interaction using Python objects",
    explanation:"Django ORM lets developers interact with databases using Python models and queries."
  },
  {
    id:10, module:"REST API", difficulty:"Easy",
    question:"Which HTTP method is normally used to retrieve a resource?",
    options:["POST","GET","DELETE","PATCH"],
    answer:"GET",
    explanation:"GET is normally used to retrieve resources."
  },
  {
    id:11, module:"REST API", difficulty:"Medium",
    question:"What does HTTP 401 generally indicate?",
    options:[
      "Not Found",
      "Unauthorized",
      "Server Error",
      "Created"
    ],
    answer:"Unauthorized",
    explanation:"401 indicates that authentication is required or invalid."
  },
  {
    id:12, module:"AI", difficulty:"Easy",
    question:"What does ML stand for?",
    options:[
      "Machine Learning",
      "Model Logic",
      "Memory Language",
      "Machine Language only"
    ],
    answer:"Machine Learning",
    explanation:"ML stands for Machine Learning."
  },
  {
    id:13, module:"AI", difficulty:"Medium",
    question:"What is an embedding?",
    options:[
      "A database table",
      "A vector representation of information",
      "A CSS property",
      "A Docker image"
    ],
    answer:"A vector representation of information",
    explanation:"Embeddings represent information numerically in vector space."
  },
  {
    id:14, module:"Docker", difficulty:"Easy",
    question:"What is a Docker image?",
    options:[
      "A running process only",
      "A packaged application template",
      "A database",
      "A browser"
    ],
    answer:"A packaged application template",
    explanation:"An image contains the application and required dependencies used to create containers."
  },
  {
    id:15, module:"Docker", difficulty:"Medium",
    question:"Which file commonly defines how a Docker image is built?",
    options:["docker.json","Dockerfile","container.txt","image.yml"],
    answer:"Dockerfile",
    explanation:"A Dockerfile contains instructions for building an image."
  },
  {
    id:16, module:"DSA", difficulty:"Easy",
    question:"What is the typical time complexity of accessing an array element by index?",
    options:["O(1)","O(n)","O(n²)","O(log n)"],
    answer:"O(1)",
    explanation:"Direct array indexing normally provides constant-time access."
  },
  {
    id:17, module:"DSA", difficulty:"Medium",
    question:"Which data structure follows LIFO?",
    options:["Queue","Stack","Graph","Tree"],
    answer:"Stack",
    explanation:"Stack follows Last In, First Out."
  },
  {
    id:18, module:"System Design", difficulty:"Medium",
    question:"What does scalability mean?",
    options:[
      "Removing all databases",
      "Ability to handle increasing load",
      "Writing fewer lines of code",
      "Using only one server"
    ],
    answer:"Ability to handle increasing load",
    explanation:"Scalability is the ability of a system to handle increased users, traffic or workload."
  },
  {
    id:19, module:"Git", difficulty:"Easy",
    question:"Which command uploads local commits to a remote repository?",
    options:["git pull","git push","git clone","git init"],
    answer:"git push",
    explanation:"git push sends local commits to the configured remote repository."
  },
  {
    id:20, module:"Git", difficulty:"Medium",
    question:"Which command creates a new Git commit?",
    options:["git save","git commit","git upload","git snapshot"],
    answer:"git commit",
    explanation:"git commit records staged changes in the local repository."
  }
];

export const V7_CODING = [
  {
    title:"Reverse a String",
    difficulty:"Easy",
    language:"Python",
    task:"Write a function that reverses a string.",
    hint:"Use slicing or a loop.",
    solution:"def reverse_string(s):\n    return s[::-1]"
  },
  {
    title:"Find Maximum",
    difficulty:"Easy",
    language:"Python",
    task:"Find the maximum number in an array without using max().",
    hint:"Track the largest value while iterating.",
    solution:"def find_max(arr):\n    result = arr[0]\n    for x in arr[1:]:\n        if x > result:\n            result = x\n    return result"
  },
  {
    title:"Frequency Counter",
    difficulty:"Medium",
    language:"Python",
    task:"Count the frequency of each element in an array.",
    hint:"Use a dictionary.",
    solution:"def frequency(arr):\n    d = {}\n    for x in arr:\n        d[x] = d.get(x, 0) + 1\n    return d"
  },
  {
    title:"Two Sum",
    difficulty:"Medium",
    language:"Python",
    task:"Return indices of two numbers whose sum equals target.",
    hint:"Use a hash map.",
    solution:"def two_sum(nums, target):\n    seen = {}\n    for i, x in enumerate(nums):\n        need = target - x\n        if need in seen:\n            return [seen[need], i]\n        seen[x] = i"
  }
];
