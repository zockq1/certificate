import Button from '@/components/Test';

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
