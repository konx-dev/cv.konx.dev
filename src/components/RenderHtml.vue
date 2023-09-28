<!-- solution found here: https://stackoverflow.com/questions/46782359/vue-js-v-html-alternative -->

<script>
	import { h } from "vue";

	const parseHTML = (html) => {
		const template = document.createElement("template");
		template.innerHTML = html;
		return template.content;
	};

	const renderNode = (node, tags) => {
		const nodeType = node.nodeType;
		if (nodeType === 1) {
			const nodeName = node.nodeName.toLocaleLowerCase();
			if (tags.includes(nodeName)) {
				const children = [];
				node.childNodes.forEach((childNode) => {
					children.push(renderNode(childNode, tags));
				});
				return h(nodeName, children);
			}
		}
		return node.textContent;
	};

	export default {
		name: "RenderHtml",
		props: {
			html: {
				type: String,
				required: true,
			},
			tags: {
				type: Array,
				default: () => ["p"],
			},
		},
		setup(props) {
			const html = parseHTML(props.html);

			// return the render function
			return () => {
				const output = [];
				html.childNodes.forEach((childNode) => {
					output.push(renderNode(childNode, props.tags));
				});
				if (output.length === 1) {
					return output[0];
				} else if (output.length === 0) {
					return "";
				}
				return output;
			};
		},
	};
</script>
