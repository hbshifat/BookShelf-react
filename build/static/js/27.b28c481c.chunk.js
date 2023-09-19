(this["webpackJsonp@kentcdodds/react-fundamentals"]=this["webpackJsonp@kentcdodds/react-fundamentals"]||[]).push([[27],{177:function(t,n,s){"use strict";s.r(n),n.default='\x3c!-- Creating custom components --\x3e\n\x3c!-- http://localhost:3000/isolated/exercise/04.html --\x3e\n\n<body>\n    <div id="root"></div>\n    <script src="https://unpkg.com/react@17.0.0/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@17.0.0/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/@babel/standalone@7.12.4/babel.js"><\/script>\n    <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"><\/script>\n    <script type="text/babel">\n        const posts = [\n            {\n                id: \'423j84923n9023\',\n                title: \'Solemon the servent of Allah\',\n                charecture: 45,\n                specialCharecture: [\'Love\', \'Passion\', \'Hard Work\', 45]\n            }\n        ]\n\n        function PostList({ postList }) {\n            const postsUI = postList.map(post => {\n                return (\n                    <li key={post.id}>\n                        <p><strong>Title : </strong>{post.title}</p>\n                        <p><strong>Charecture : </strong>{post.charecture}</p>\n                    </li>\n                )\n            })\n            return postsUI;\n        }\n\n        PostList.defaultProps = {\n            posts: []\n        }\n\n        PostList.propTypes = {\n            postList: PropTypes.arrayOf(PropTypes.shape({\n                id: PropTypes.string,\n                title: PropTypes.string.isRequired,\n                charecture: PropTypes.number,\n                specialCharecture: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))\n            }))\n        }\n\n\n\n        const element = (\n            <div className="container">\n                <PostList postList={posts} />\n            </div>\n        )\n\n        // \ud83d\udcaf This is only the first step to making actual React components. The rest is in the extra credit!\n        ReactDOM.render(element, document.getElementById(\'root\'))\n    <\/script>\n</body>'}}]);
//# sourceMappingURL=27.b28c481c.chunk.js.map