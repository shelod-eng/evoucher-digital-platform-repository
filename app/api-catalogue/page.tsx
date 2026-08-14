import { KnowledgePage } from '@/components/KnowledgePage';
import { apiEvidence } from '@/data/phase3';

export default function ApiCataloguePage() {
  return (
    <KnowledgePage
      eyebrow="Verified route catalogue"
      title="API Catalogue"
      summary="Verified API route evidence extracted from the production eVoucher source repository. Endpoints are included only where source files were discovered."
      records={apiEvidence}
    />
  );
}
