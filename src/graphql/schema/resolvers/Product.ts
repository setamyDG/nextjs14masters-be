import type { ProductResolvers } from "./../../types.generated";

export const Product: ProductResolvers = {
	async reviews(parent, _arg, ctx) {
		const reviews = await ctx.prisma.product
			.findUnique({ where: { id: parent.id } })
			.reviews();
		return reviews ?? [];
	},
};
