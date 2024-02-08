import type { QueryResolvers } from "./../../../types.generated";

export const product: NonNullable<QueryResolvers["product"]> = async (
	// odzwierciedla typ zwracany przez resolver (w przypadku reviews bedzie to prodcut)
	_parent,
	// argumenty przekazane do resolvera (id produktu)
	arg,
	// kontekst przekazany do resolvera, zawiera obiekt prisma, który umożliwia wykonywanie zapytań do bazy danych
	ctx,
) => {
	const product = await ctx.prisma.product.findUnique({
		where: { id: arg.id },
	});

	if (!product) {
		return null;
	}

	return { ...product, reviews: [] };
};
