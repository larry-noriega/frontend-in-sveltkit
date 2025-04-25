export function getStatusBadgeClass(status: string): string {
  switch (status.toLowerCase()) {
      case 'success':
      case 'completed':
          return 'bg-success';
      case 'pending':
          return 'bg-warning';
      case 'failed':
      case 'error':
          return 'bg-danger';
      default:
          return 'bg-secondary';
  }
}
