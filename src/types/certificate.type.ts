export interface CertificateModel {
  id: number;
  title: string;
  receiptDate: Date;
  examDate: Date;
  redirectURL: string;
  requirements: string;
}

export interface CategoryModel {
  id: number;
  title: string;
  middleCategory: {
    id: number;
    title: string;
  }[];
}

export interface GetCertificateListRequest {
  path: {
    categoryId: number;
    middleCategoryId: number;
  };
}

export type GetCertificateListResponse = Pick<
  CertificateModel,
  'id' | 'title' | 'examDate' | 'receiptDate'
>[];

export type GetCategoryListResponse = CategoryModel[];

export interface GetCertificateRequest {
  path: {
    certificateId: number;
  };
}

export type GetCertificateResponse = Pick<
  CertificateModel,
  'id' | 'title' | 'examDate' | 'receiptDate'
>;
