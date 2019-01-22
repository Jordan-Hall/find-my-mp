export interface IFindConstituency {
    Members: Members;
  }
  export interface Members {
    Member?: (MemberEntity)[] | null;
  }
  export interface MemberEntity {
    $: $;
    DisplayAs?: (string)[] | null;
    ListAs?: (string)[] | null;
    FullTitle?: (string)[] | null;
    LayingMinisterName?: (string)[] | null;
    DateOfBirth?: (DateOfBirthEntityOrDateOfDeathEntityOrHouseEndDateEntity)[] | null;
    DateOfDeath?: (DateOfBirthEntityOrDateOfDeathEntityOrHouseEndDateEntity)[] | null;
    Gender?: (string)[] | null;
    Party?: (PartyEntity)[] | null;
    House?: (string)[] | null;
    MemberFrom?: (string)[] | null;
    HouseStartDate?: (string)[] | null;
    HouseEndDate?: (DateOfBirthEntityOrDateOfDeathEntityOrHouseEndDateEntity)[] | null;
    CurrentStatus?: (CurrentStatusEntity)[] | null;
  }
  export interface $ {
    Member_Id: string;
    Dods_Id: string;
    Pims_Id: string;
    Clerks_Id: string;
  }
  export interface DateOfBirthEntityOrDateOfDeathEntityOrHouseEndDateEntity {
    $: $1;
  }
  export interface $1 {
    xsi: string;
    xmlns: string;
  }
  export interface PartyEntity {
    _: string;
    $: $2;
  }
  export interface $2 {
    Id: string;
  }
  export interface CurrentStatusEntity {
    $: $3;
    Name?: (string)[] | null;
    Reason?: (string)[] | null;
    StartDate?: (string)[] | null;
  }
  export interface $3 {
    Id: string;
    IsActive: string;
  }
  