"use client"
type ReportListProps = {
  reports: {
    id: string;
    issueName: string;
    description: string;
    city: string;
    state: string;
    pincode: string;
    severity: string;
    media?: File | null;
    createdAt: string;
  }[];
};

export function ReportList({ reports }: ReportListProps) {
  if (reports.length === 0)
    return <p className="text-zinc-400">No reports yet.</p>;

  return (
    <div className="space-y-4">
      {reports.map((report) => (
        <div
          key={report.id}
          className="bg-zinc-800 p-4 rounded border border-zinc-700"
        >
          <h2 className="text-xl font-semibold">{report.issueName}</h2>
          <p className="text-sm">{report.description}</p>
          <p className="text-sm text-zinc-400">
            {report.city}, {report.state} - {report.pincode}
          </p>
          <p className="text-sm text-teal-300">Severity: {report.severity}</p>
          <p className="text-xs text-zinc-500">
            Reported on: {new Date(report.createdAt).toLocaleString()}
          </p>
          {report.media && (
            <div className="mt-2">
              {report.media.type.startsWith("video") ? (
                <video controls className="w-full rounded">
                  <source src={URL.createObjectURL(report.media)} />
                </video>
              ) : (
                <img
                  src={URL.createObjectURL(report.media)}
                  alt="Uploaded media"
                  className="w-full rounded"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
