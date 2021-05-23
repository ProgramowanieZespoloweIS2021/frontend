import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Omit } from '@material-ui/core';
import { IOffer } from '@@types/models/Offer';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllTags } from '@state/_redux/offers/selectors';
import { yupResolver } from '@hookform/resolvers/yup';
import { addOfferFormValidation } from '@domains/OfferAdd/_components/validation';
import { createOffer, getAllTags } from '@state/_redux/offers/actions';
import { offerFormToModel } from '@domains/OfferAdd/_components/helpers';

type SelectOption = {
    label: string;
    value: string;
};

export type IAddOfferForm = Omit<IOffer, 'user' | 'tags'> & {
    tags: SelectOption[];
    ownerId: number;
};

export const useLogic = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<IAddOfferForm>({
        resolver: yupResolver(addOfferFormValidation),
        mode: 'onSubmit',
    });
    const dispatch = useDispatch();

    const [tiersIndexes, setTiersIndexes] = useState<number[]>([]);
    const [thumbnailIndexes, setThumbnailIndexes] = useState<number[]>([]);

    const onSubmit = (data: IAddOfferForm) => {
        dispatch(createOffer.request(offerFormToModel(data)));
    };

    useEffect(() => {
        dispatch(getAllTags.request(null));
    }, []);

    const tagOptions = useSelector(selectAllTags);
    return {
        register,
        handleSubmit,
        control,
        errors,
        tiersIndexes,
        setTiersIndexes,
        thumbnailIndexes,
        setThumbnailIndexes,
        tagOptions,
        onSubmit,
    };
};
