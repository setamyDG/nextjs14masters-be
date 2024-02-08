/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { DateTime } from "./schema/resolvers/DateTime";
import { Product } from "./schema/resolvers/Product";
import { product as Query_product } from "./schema/resolvers/Query/product";
import { products as Query_products } from "./schema/resolvers/Query/products";
import { Review } from "./schema/resolvers/Review";
export const resolvers: Resolvers = {
	Query: { product: Query_product, products: Query_products },

	DateTime: DateTime,
	Product: Product,
	Review: Review,
};
