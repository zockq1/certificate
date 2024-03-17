import Button from '@/components/Button';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <div>
      {params.certificateId}
      <Button />
    </div>
  );
}
