import { createFileRoute, redirect } from "@tanstack/react-router";

import { mentoriaLinks } from "@/data/mentoria";

/**
 * `/guia` → página de venda do eBook na Hotmart.
 *
 * Existe por um motivo prático: bloqueadores de anúncio tratam
 * `go.hotmart.com` como domínio de afiliado e escondem o link — e, com ele,
 * o card inteiro do carrossel de recursos. Quem usa Chrome com bloqueador
 * simplesmente não via o único produto pago da página.
 *
 * Saindo do próprio domínio, o link é primeira parte: o card aparece para
 * todo mundo e o redirecionamento acontece no servidor, antes de qualquer
 * extensão ter o que bloquear. O mesmo endereço serve para divulgar em
 * stories e na bio, que é mais curto e fácil de ditar que o link da Hotmart.
 */
export const Route = createFileRoute("/guia")({
  beforeLoad: () => {
    throw redirect({ href: mentoriaLinks.guia, statusCode: 302, reloadDocument: true });
  },
  component: () => null,
});
