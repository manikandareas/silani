export type Pests = {
   id: string;
   name: string;
   imageUrl: string;
   imageKey: string;
   createdAt: Date;
   updatedAt: Date;
};

export type Pest = Pests[];
