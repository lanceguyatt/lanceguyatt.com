declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"pages": {
"404.md": {
  id: "404.md",
  slug: "404",
  body: string,
  collection: "pages",
  data: any
},
"about.md": {
  id: "about.md",
  slug: "about",
  body: string,
  collection: "pages",
  data: any
},
"home.md": {
  id: "home.md",
  slug: "home",
  body: string,
  collection: "pages",
  data: any
},
"kickstart.md": {
  id: "kickstart.md",
  slug: "kickstart",
  body: string,
  collection: "pages",
  data: any
},
"ram-disk.md": {
  id: "ram-disk.md",
  slug: "ram-disk",
  body: string,
  collection: "pages",
  data: any
},
"work.md": {
  id: "work.md",
  slug: "work",
  body: string,
  collection: "pages",
  data: any
},
},
"tags": {
"laravel-mix.md": {
  id: "laravel-mix.md",
  slug: "laravel-mix",
  body: string,
  collection: "tags",
  data: any
},
"ui-patterns.md": {
  id: "ui-patterns.md",
  slug: "ui-patterns",
  body: string,
  collection: "tags",
  data: any
},
},
"work": {
"awin/associated-press/index.md": {
  id: "awin/associated-press/index.md",
  slug: "awin/associated-press",
  body: string,
  collection: "work",
  data: any
},
"awin/index.md": {
  id: "awin/index.md",
  slug: "awin",
  body: string,
  collection: "work",
  data: any
},
"bauer-media/index.md": {
  id: "bauer-media/index.md",
  slug: "bauer-media",
  body: string,
  collection: "work",
  data: any
},
"cannonburyyard/index.md": {
  id: "cannonburyyard/index.md",
  slug: "cannonburyyard",
  body: string,
  collection: "work",
  data: any
},
"futurestate-design/index.md": {
  id: "futurestate-design/index.md",
  slug: "futurestate-design",
  body: string,
  collection: "work",
  data: any
},
"hearst-content-agency/index.md": {
  id: "hearst-content-agency/index.md",
  slug: "hearst-content-agency",
  body: string,
  collection: "work",
  data: any
},
"hearst-global-solutions/index.md": {
  id: "hearst-global-solutions/index.md",
  slug: "hearst-global-solutions",
  body: string,
  collection: "work",
  data: any
},
"hearst-italy/index.md": {
  id: "hearst-italy/index.md",
  slug: "hearst-italy",
  body: string,
  collection: "work",
  data: any
},
"hearst-spain/index.md": {
  id: "hearst-spain/index.md",
  slug: "hearst-spain",
  body: string,
  collection: "work",
  data: any
},
"hearst-uk/index.md": {
  id: "hearst-uk/index.md",
  slug: "hearst-uk",
  body: string,
  collection: "work",
  data: any
},
"lance-guyatt/index.md": {
  id: "lance-guyatt/index.md",
  slug: "lance-guyatt",
  body: string,
  collection: "work",
  data: any
},
"novagraaf/index.md": {
  id: "novagraaf/index.md",
  slug: "novagraaf",
  body: string,
  collection: "work",
  data: any
},
"wilson-fletcher/index.md": {
  id: "wilson-fletcher/index.md",
  slug: "wilson-fletcher",
  body: string,
  collection: "work",
  data: any
},
},

	};

	type ContentConfig = never;
}
