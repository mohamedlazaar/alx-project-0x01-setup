export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressProps;
    phone: string;
    website: string;
    company: CompanyProps;

  }
export interface AddressProps{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoProps;
}
export interface CompanyProps{
    name: string;
    catchPhrase: string;
    bs: string;
}
export interface GeoProps{
    lat: string;
    lng: string;
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
export interface PostModalProps {
   onClose: () => void;
   onSubmit: (post: PostData) => void;
}

export interface UserData {
    id: number
    username: string
    name: string
    email: string
    address: AddressProps
    phone: string
    website: string
    company: CompanyProps
  }
  
  export interface UserModalProps {
    onSubmit: (post: UserProps) => void
    onClose: () => void
  }