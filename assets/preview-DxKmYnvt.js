import { d as u } from "./index-DrFu-skq.js";
import "./index-BgCQ941z.js";
import { U as g, _ as m } from "./index-DAfJVnKo.js";
const {
		useParameter: b,
		addons: A,
		useEffect: v,
		useMemo: w,
		definePreview: N,
	} = __STORYBOOK_MODULE_PREVIEW_API__,
	{ deprecate: S } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var k = Object.defineProperty,
	d = (e, t) => {
		for (var r in t) k(e, r, { get: t[r], enumerable: !0 });
	},
	O = {};
d(O, { initialGlobals: () => D });
var a = "themes",
	R = `storybook/${a}`,
	c = "theme",
	l = {},
	f = { REGISTER_THEMES: `${R}/REGISTER_THEMES` },
	D = { [c]: "" },
	P = {};
d(P, {
	initializeThemeState: () => h,
	pluckThemeFromContext: () => E,
	useThemeParameters: () => B,
});
function E({ globals: e }) {
	return e[c] || "";
}
function B(e) {
	return (
		S(u`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),
		e ? (e.parameters[a] ?? l) : b(a, l)
	);
}
function h(e, t) {
	A.getChannel().emit(f.REGISTER_THEMES, { defaultTheme: t, themes: e });
}
var M = "html",
	y = "data-theme",
	C = ({
		themes: e,
		defaultTheme: t,
		parentSelector: r = M,
		attributeName: T = y,
	}) => (
		h(Object.keys(e), t),
		(_, o) => {
			let { themeOverride: s } = o.parameters[a] ?? {},
				i = E(o);
			return (
				v(() => {
					let n = document.querySelector(r),
						p = s || i || t;
					n && n.setAttribute(T, e[p]);
				}, [s, i]),
				_()
			);
		}
	);
const I = {
		base: "dark",
		brandTitle: "@gezit",
		brandUrl: "https://gitlab.sicepat.tech/frontend/web/gezit-ui",
		brandImage: "/gezit-ui-storybook/images/sicepat-brand-white.svg",
		colorPrimary: "#667085",
		colorSecondary: "#667085",
		appBg: "#222630",
		appContentBg: "rgb(19 22 30)",
		appBorderColor: "#323945",
		textColor: "#A6ADBA",
		barTextColor: "#A6ADBA",
		barSelectedColor: "#C3D0EA",
		barBg: "#191D24",
	},
	L = g(I),
	F = {
		parameters: {
			actions: { argTypesRegex: "^on[A-Z].*" },
			backgrounds: {
				values: [
					{ name: "light", value: "var(--background)" },
					{ name: "dark", value: "var(--background)" },
				],
				default: "light",
			},
			docs: { theme: L },
			controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
			options: { storySort: { order: ["Welcome", "UI", "Blocks"] } },
			darkMode: { dark: { ...m.dark }, light: { ...m.light } },
		},
	},
	H = [
		C({
			themes: { light: "light", dark: "dark" },
			defaultTheme: "light",
			attributeName: "data-theme",
		}),
	];
export { H as decorators, F as default };
