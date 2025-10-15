export enum Status {
  failed = 'failed',
  success = 'success',
}

interface ServiceResponseInterface {
  status: Status;
  error?: string;
}

export default ServiceResponseInterface;
