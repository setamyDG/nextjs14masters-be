import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 22, end: 30 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Product",
									loc: { start: 33, end: 40 },
								},
								loc: { start: 33, end: 40 },
							},
							loc: { start: 33, end: 41 },
						},
						loc: { start: 32, end: 42 },
					},
					directives: [],
					loc: { start: 22, end: 42 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 45, end: 52 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 53, end: 55 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 57, end: 59 },
									},
									loc: { start: 57, end: 59 },
								},
								loc: { start: 57, end: 60 },
							},
							directives: [],
							loc: { start: 53, end: 60 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 63, end: 70 },
						},
						loc: { start: 63, end: 70 },
					},
					directives: [],
					loc: { start: 45, end: 70 },
				},
			],
			loc: { start: 0, end: 72 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 79, end: 86 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 91, end: 93 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 95, end: 97 } },
							loc: { start: 95, end: 97 },
						},
						loc: { start: 95, end: 98 },
					},
					directives: [],
					loc: { start: 91, end: 98 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 101, end: 105 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 107, end: 113 },
							},
							loc: { start: 107, end: 113 },
						},
						loc: { start: 107, end: 114 },
					},
					directives: [],
					loc: { start: 101, end: 114 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 117, end: 128 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 130, end: 136 },
							},
							loc: { start: 130, end: 136 },
						},
						loc: { start: 130, end: 137 },
					},
					directives: [],
					loc: { start: 117, end: 137 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 140, end: 145 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 147, end: 150 },
							},
							loc: { start: 147, end: 150 },
						},
						loc: { start: 147, end: 151 },
					},
					directives: [],
					loc: { start: 140, end: 151 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "image", loc: { start: 154, end: 159 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 161, end: 167 },
							},
							loc: { start: 161, end: 167 },
						},
						loc: { start: 161, end: 168 },
					},
					directives: [],
					loc: { start: 154, end: 168 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "reviews",
						loc: { start: 171, end: 178 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Review",
									loc: { start: 181, end: 187 },
								},
								loc: { start: 181, end: 187 },
							},
							loc: { start: 181, end: 188 },
						},
						loc: { start: 180, end: 189 },
					},
					directives: [],
					loc: { start: 171, end: 189 },
				},
			],
			loc: { start: 74, end: 191 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 197, end: 203 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 208, end: 210 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 212, end: 214 },
							},
							loc: { start: 212, end: 214 },
						},
						loc: { start: 212, end: 215 },
					},
					directives: [],
					loc: { start: 208, end: 215 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 218, end: 223 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 225, end: 231 },
							},
							loc: { start: 225, end: 231 },
						},
						loc: { start: 225, end: 232 },
					},
					directives: [],
					loc: { start: 218, end: 232 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 235, end: 246 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 248, end: 254 },
							},
							loc: { start: 248, end: 254 },
						},
						loc: { start: 248, end: 255 },
					},
					directives: [],
					loc: { start: 235, end: 255 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 258, end: 264 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 266, end: 269 },
							},
							loc: { start: 266, end: 269 },
						},
						loc: { start: 266, end: 270 },
					},
					directives: [],
					loc: { start: 258, end: 270 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createdAt",
						loc: { start: 273, end: 282 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DateTime",
								loc: { start: 284, end: 292 },
							},
							loc: { start: 284, end: 292 },
						},
						loc: { start: 284, end: 293 },
					},
					directives: [],
					loc: { start: 273, end: 293 },
				},
			],
			loc: { start: 192, end: 295 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 301, end: 306 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 296, end: 306 },
		},
		{
			kind: "ScalarTypeDefinition",
			name: { kind: "Name", value: "DateTime", loc: { start: 315, end: 323 } },
			directives: [],
			loc: { start: 308, end: 323 },
		},
	],
	loc: { start: 0, end: 324 },
} as unknown as DocumentNode;
