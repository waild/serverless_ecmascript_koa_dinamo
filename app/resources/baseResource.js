import AWS from 'aws-sdk';
import uuid from 'uuid/v4';

export default class BaseResource {
    constructor(tableName) {
        this.dynamoDb = new AWS.DynamoDB.DocumentClient();
        this.tableName = tableName;
    }

    async getSingle(id) {
        const params = {
            TableName: this.tableName,
            Key: {
                uuid: id,
            },
        };
        const { Item } = await this.dynamoDb.get(params).promise();
        return Item;
    }

    async getList() {
        const params = {
            TableName: this.tableName,
        };
        const { Items } = await this.dynamoDb.scan(params).promise();
        return Items;
    }

    async create(body) {
        const item = Object.assign(body, { uuid: uuid() });
        await this.dynamoDb
            .put({
                TableName: this.tableName,
                Item: item,
                ReturnValues: 'ALL_OLD',
            })
            .promise();
        return item;
    }

    async update(id, body) {
        const item = Object.assign(body, { uuid: id });
        await this.dynamoDb
            .update({
                TableName: this.tableName,
                Item: body,
                Key: {
                    uuid: id,
                },
            })
            .promise();
        return item;
    }

    deleteSingle(id) {
        return this.dynamoDb
            .delete({
                TableName: this.tableName,
                Key: {
                    uuid: id,
                },
            })
            .promise();
    }
}
