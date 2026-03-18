export const BLOG_CATEGORIES = [
    "Latest Blogs",
    "Ai automation",
    "Web Development",
    "App Development",
];

export const BLOG_POSTS = [
    {
        id: 1,
        title: "Blockchain Design Patterns for Secure & Upgradeable Contracts",
        category: "Design Process",
        image: "/images/blog_blockchain.png",
        date: "March 15, 2026",
        author: "AdRyter Team",
        toc: [
            "What is a Blockchain Design Pattern?",
            "Core Categories of Blockchain Design Patterns",
            "The Proxy Pattern for Upgradeability",
            "Security Standards First",
            "Common Mistakes in Smart Contracts"
        ],
        takeaways: [
            "Blockchain Design Patterns simplify smart contract structure and improve reliability.",
            "Proxy, Factory, and Registry patterns help manage upgrades and deployments efficiently.",
            "Security patterns prevent exploits and protect funds in live blockchain systems.",
            "Patterns influence gas usage, so optimization balances cost with safety."
        ],
        content: `
            <p>Blockchain technology is revolutionizing how we handle digital agreements. To build secure and upgradeable smart contracts, developers are turning to advanced design patterns that separate logic from storage.</p>
            
            <h3>The Proxy Pattern</h3>
            <p>One of the most popular patterns for upgradeability is the Proxy Pattern. In this setup, users interact with a Proxy contract that delegates all calls to an Implementation contract containing the business logic.</p>
            
            <blockquote>
                "Separating storage from logic is the cornerstone of building future-proof dApps."
            </blockquote>

            <h3>Security First</h3>
            <p>While upgradeability provides flexibility, it introduces security risks. Access controls must be strictly enforced to prevent unauthorized upgrades that could compromise user funds.</p>

            <ul>
                <li>Strict Role-Based Access Control (RBAC)</li>
                <li>Comprehensive Auditing Benchmarks</li>
                <li>Fail-safe Emergency Pausable contracts</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Blockchain UX Design Explained: Principles, Flows & Tips",
        category: "Branding",
        image: "/images/blog_crypto.png",
        date: "March 14, 2026",
        author: "Design Lead",
        toc: [
            "What is Web3 UX?",
            "Abstracting Complexities",
            "Optimistic UI & Feedback Loops",
            "Wallet Connect Handshakes",
            "Security & Visibility"
        ],
        takeaways: [
            "Web3 UX focuses on hiding complexity behind familiar Web2 interfaces.",
            "Account abstraction removes the friction of seed phrase management.",
            "Instant visual feedback counters the asynchronous nature of blockchain blocks.",
            "Clear readable transaction states prevent user panic and gas drops."
        ],
        content: `
            <p>Designing for Web3 introduces unique challenges. User experience in blockchain-based applications often feels clunky due to complex key management and transaction fees (Gas).</p>
            
            <h3>Abstracting Complexity</h3>
            <p>The core goal of Web3 UX is to make decentralized tech feel as smooth as Web2. This includes introducing account abstraction solutions to hide seed phrases behind standard email logins.</p>

            <h3>Feedback Loops</h3>
            <p>Users need instant visual feedback for asynchronous blockchain events. Traditional loader bars don't suffice when block confirmations might take seconds or minutes.</p>

            <ul>
                <li>Optimistic UI upgrades for quick visually confirmed states</li>
                <li>Explicit gas fee estimations in readable native currencies</li>
                <li>Clear readable transaction sign screens</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Duplicate: Blockchain Design Patterns for Secure & Upgradeable Contracts",
        category: "Design Process",
        image: "/images/blog_blockchain.png",
        date: "March 13, 2026",
        author: "AdRyter Team",
        content: "<p>Full content text placeholder for post ID 3.</p>"
    },
    {
        id: 4,
        title: "Duplicate: Blockchain UX Design Explained: Principles, Flows & Tips",
        category: "Branding",
        image: "/images/blog_crypto.png",
        date: "March 12, 2026",
        author: "Design Lead",
        content: "<p>Full content text placeholder for post ID 4.</p>"
    },
    {
        id: 5,
        title: "Duplicate: Blockchain Design Patterns",
        category: "Design Process",
        image: "/images/blog_blockchain.png",
        date: "March 11, 2026",
        author: "AdRyter Team",
        content: "<p>Full content text placeholder for post ID 5.</p>"
    },
    {
        id: 6,
        title: "Duplicate: Blockchain UX Design",
        category: "Branding",
        image: "/images/blog_crypto.png",
        date: "March 10, 2026",
        author: "Design Lead",
        content: "<p>Full content text placeholder for post ID 6.</p>"
    },
    {
        id: 7,
        title: "Duplicate: Blockchain Design Patterns",
        category: "Design Process",
        image: "/images/blog_blockchain.png",
        date: "March 09, 2026",
        author: "AdRyter Team",
        content: "<p>Full content text placeholder for post ID 7.</p>"
    },
    {
        id: 8,
        title: "Duplicate: Blockchain UX Design",
        category: "Branding",
        image: "/images/blog_crypto.png",
        date: "March 08, 2026",
        author: "Design Lead",
        content: "<p>Full content text placeholder for post ID 8.</p>"
    }
];
