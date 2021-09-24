type JSONResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

type PartyResponse = {
  partiesList: [
    {
      data: {
        parties: {
          list: Party[];
        };
      };
    }
  ];
};

type Party = {
  name: string;
  id: string;
};

export const getParties = async (): Promise<Party[]> => {
  const response = await window.fetch("/parties", {
    method: "GET",
  });

  const { data, errors }: JSONResponse<PartyResponse> = await response.json();

  if (response.ok) {
    // made up obviously, API's are normally modelled in perfect structure ;)
    const parsedData = data?.[0].partiesList.data.parties.list;
    return parsedData;
  } else {
    // handle the api errors
    const error = new Error(
      errors?.map((e) => e.message).join("\n") ?? "unknown"
    );
    return Promise.reject(error);
  }
};

const PartyList = () => {
  const parties = getParties();
};

//parties.
